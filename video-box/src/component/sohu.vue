<template>
<div>
  <div class="alert alert-warning">
    <strong>{{tip}}</strong>
  </div>
  <div id="info">
    <div class="left col-4 col-sm-2">
      <img :src="videoList.smallVerPicUrl" />
    </div>
    <div class="right col-8 col-sm-10">
      <p>{{videoList.albumName}}</p>
      <p>{{videoList.albumDesc}}</p>
    </div>
  </div>
  <div id="list">
    <span v-show="!showLoading">
        <button type="button" class="btn btn-sm btn-default" @click="backToHome()">back</button>
        <button v-for="video in videoList.videos" type="button" class="btn btn-sm btn-default" :class="{'btn-primary':video.vid==playId}" @click="play(video.vid)" :title="video.videoDesc">{{video.order}}</button>
        <button type="button" class="btn btn-sm btn-default"  @click="closePlay()">close</button>
  	</span>
  </div>
  <div id="play" v-html="playHtml"></div>
</div>
</template>

<script>
import axios from 'axios';
import i18n from '../util/i18n';

export default {
  data() {
    return {
      tip: i18n.i18n.getTip,
      showLoading: true,
      videoList: {},
      listId: this.$route.params.id,
      playId: localStorage['souPlayId' + this.listId],
      playHtml: '',
    }
  },
  created() {
    this.getPlayList();
  },
  methods: {
    backToHome() {
      location.href = '../../';
    },
    closePlay() {
      this.playId = '';
      this.playHtml = '';
    },
    play: function(playId) {
      localStorage['souPlayId' + this.listId] = playId;
      this.playHtml = '';
      this.playId = playId;
      this.playHtml =
        '<embed id="player" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="600px" src="//tv.sohu.com/upload/swf/201803291/Main.swf" quality="high" bgcolor="#000000" allowscriptaccess="always" allowfullscreen="true" wmode="Opaque" flashvars="&amp;skin=0&amp;domain=inner&amp;sid=1803292237584853&amp;jump=0&amp;shareBtn=1&amp;playListId=1&amp;autoplay=true&amp;pid=&amp;plid=' +
        this.listId + '&amp;vid=' + this.playId + '&amp;api_key=&amp;uuid=b3257664-4941-be22-c301-7fc4cd951c1c&amp;ch_key=50e48c6168d7b908&amp;topBarFull=1">';
    },
    getPlayList: function() {
      let self = this;
      axios.get('http://140.143.232.19:8081/?id=' + this.listId).then(function(response) {
        console.log(response);
        self.videoList = response.data;
        self.showLoading = false;
        self.tip = i18n.i18n.explainTip;
      }).catch(function(err) {
        console.log('getPlayList error' + err);
      });
    }
  }
}
</script>

<style scope>
#info .left {
  float: left;
}

#info .left img {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
}

#info .right {
  float: right;
  margin-top: 5px;
  font-size: 0.92rem;
}

#list {
  clear: both;
}

#play {
  width: 100%;
  margin-top: 20px;
}

button {
  margin-right: 5px;
}
</style>
