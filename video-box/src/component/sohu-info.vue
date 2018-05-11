<template>
<div>
  <div class="alert alert-warning">
    <strong>{{tip}}</strong>
  </div>
  <div id="info">
    <div class="left col-0 col-md-2">
      <img :src="videoList.smallVerPicUrl" class="shake-slow" />
    </div>
    <div class="right col-12 col-md-10">
      <p id="albumName" class="font-weight-bold">{{videoList.albumName}} {{videoList.tvEnglishName}}</p>
      <p id="categories">
        <span v-for="category in videoList.categories" class="badge badge-pill badge-info">{{category}}</span>
      </p>
      <p id="albumDesc"><small>{{videoList.albumDesc}}</small></p>
    </div>
  </div>
  <div id="list">
    <span v-show="!showLoading">
        <router-link to="/"><button type="button" class="btn btn-sm btn-default">back</button></router-link>
        <button type="button" class="btn btn-sm btn-default"  @click="closePlay()">close</button>
        <button v-for="video in videoList.videos" type="button" class="btn btn-sm btn-default" :class="{'btn-primary':video.vid==playId}" @click="play(video.vid)" :title="video.videoDesc">{{video.order}}</button>
  	</span>
  </div>
  <div id="play" v-html="playHtml"></div>
</div>
</template>

<script>
import axios from 'axios';
import {
  tip
} from '../util/i18n';

export default {
  data() {
    return {
      tip: tip.init,
      showLoading: true,
      videoList: {},
      listId: this.$route.params.id,
      playId: localStorage['souPlayId' + this.$route.params.id],
      playHtml: '',
    }
  },
  created() {
    this.getPlayList();
  },
  methods: {
    closePlay() {
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
      axios.get('http://pl.hd.sohu.com/videolist?order=0&cnt=1&withLookPoint=1&preVideoRule=1&playlistid=' + this.listId).then(function(response) {
        console.log(response);
        self.videoList = response.data;
        self.showLoading = false;
        self.tip = tip.finish;
        document.title = self.videoList.albumName + ' ' + self.videoList.tvEnglishName;
      }).catch(function(err) {
        console.log('getPlayList error' + err);
      });
    }
  }
}
</script>

<style scoped>
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

#albumName {
  font-size: 1.4rem;
}

#albumDesc {
  font-size: 1rem;
}

#categories span{
  margin-right: 10px;
}

#play {
  width: 100%;
  margin-top: 20px;
}

button {
  margin-right: 5px;
}
</style>
