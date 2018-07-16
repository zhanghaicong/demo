import md5 from 'js-md5'

const getDateString = (time) => {
  var time = parseInt(new Date().getTime() / 1000) - time;
  if (time > 30 * 24 * 3600) {
    return parseInt(time / (30 * 24 * 3600)) + ' months ago';
  } else if (time > 24 * 3600) {
    return parseInt(time / (24 * 3600)) + ' days ago';
  } else if (time > 3600) {
    return parseInt(time / 3600) + ' hours ago';
  } else if (time > 60) {
    return parseInt(time / 60) + ' minutes ago';
  } else if (time > 0) {
    return parseInt(time) + ' seconds ago';
  } else {
    return 'now';
  }
}

const getImg = (string) => 'https://v2ex.assets.uxengine.net/gravatar/' + md5(string) + '?s=48&d=retro';

const getUUID = () => new Date().getTime() + Math.floor(Math.random() * 10);

export {
  getDateString,
  getImg,
  getUUID
}
