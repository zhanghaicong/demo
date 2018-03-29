<template>
<tr>
  <img :src="getImg(comment.user)">
  <td class="detail pull-left" width="auto">
    <div>
      <strong><router-link :to="{name:'user',params:{userId:comment.user}}">{{comment.user}}</router-link></strong>
      <span class="time">{{getDateString(comment.time)}}</span>
    </div>
    <div class="content">{{comment.content}}</div>
    <div class="operate">
      <span class="cursor-pointer" v-bind:class="{'is-like':comment.isLike}" @click="likeOrNot(comment.id)">赞 {{comment.like.length}}</span>
      <router-link :to="{name:'comment',params:{commentId:comment.id}}">
        <span class="cursor-pointer">回复 {{comment.reply}}</span>
      </router-link>
      <span class="cursor-pointer" v-show="(this.$store.state.user==''&&comment.user=='小硫酸铜')||this.$store.state.user==comment.user" @click="deleteComment(comment.id)">删除</span>
    </div>
  </td>
</tr>
</template>

<script>
import util from '../util/util'

export default {
  props: ['comment'],
  methods: {
    likeOrNot(id) {
      this.$store.dispatch('likeOrNot', id);
    },
    deleteComment(id) {
      this.$store.dispatch('deleteComment', id);
    },
    getDateString(time) {
      return util.getDateString(time);
    },
    getImg(string) {
      return util.getImg(string);
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
  width: 100%;
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

#btn-comment {
  margin: 20px 0px;
}

#content-button {
  margin-top: 20px;
}

#comment-num {
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
