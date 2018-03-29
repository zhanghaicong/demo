import md5 from 'js-md5'

const getDateString = function(time) {
  var time = Date.parse(new Date()) / 1000 - time;
  if (time > 30 * 24 * 3600) {
    return parseInt(time / (30 * 24 * 3600)) + '月前';
  } else if (time > 24 * 3600) {
    return parseInt(time / (24 * 3600)) + '天前';
  } else if (time > 3600) {
    return parseInt(time / 3600) + '小时前';
  } else if (time > 60) {
    return parseInt(time / 60) + '分钟前';
  } else if (time > 0) {
    return parseInt(time) + '秒前';
  } else {
    return '刚刚';
  }
}

const getImg = function(string) {
  return 'https://v2ex.assets.uxengine.net/gravatar/' + md5(string) + '?s=48&d=retro';
}

export default{
  getDateString,
  getImg
}
