<template>
<tr>
  <img :src="getImg(reply.user)">
  <td class="detail pull-left" width="auto">
    <div>
      <strong><router-link :to="{name:'user',params:{userId:reply.user}}">{{reply.user}}</router-link></strong>
      <span class="time">{{getDateString(reply.time)}}</span>
    </div>
    <div class="content">{{reply.content}}</div>
    <div class="operate">
      <span class="cursor-pointer" v-show="(this.$store.state.user==''&&reply.user=='小硫酸铜')||this.$store.state.user==reply.user" @click="deleteReply(reply.id)">删除</span>
    </div>
  </td>
</tr>
</template>

<script>
import md5 from 'js-md5'

export default {
  props: ['reply'],
  methods: {
    deleteReply(id) {
      this.$store.dispatch('deleteReply', id);
    },
    getDateString(time) {
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
    },
    getImg(string) {
      return 'https://v2ex.assets.uxengine.net/gravatar/' + md5(string) + '?s=48&d=retro';
    }
  }
}
</script>

<style scope>

img {
  margin: 0px 10px;
  width: 48px;
}

.is-like {
  color: red;
}

.detail {
  padding-right: 15px;
}

.content {
  margin-top: 3px;
  line-height: 20px;
  margin-bottom: 10px;
}

.time {
  color: #777;
  font-size: 85%;
  float: right;
}

#btn-reply {
  margin: 20px 0px;
}

#content-button {
  margin-top: 20px;
}

#reply-num {
  line-height: 33px;
  margin-left: 10px;
}

.operate {
  color: #777;
  font-size: 85%;
}

.operate span {
  margin-right: 5px;
}
</style>
