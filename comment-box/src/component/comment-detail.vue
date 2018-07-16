<template>
<div class="row">
  <div class="avatar col-2 col-lg-1">
    <router-link :to="{name:'user',params:{userId:comment.user}}">
      <img :src="getImg(comment.user)" class="shake-slow" />
    </router-link>
  </div>
  <div class="right col-10 col-lg-11">
    <router-link :to="{name:'user',params:{userId:comment.user}}" class="user">{{comment.user}}</router-link>
    <span class="time">{{getDateString(comment.time)}}</span>
    <strong class="content">{{comment.content}}</strong>
    <div class="icon">
      <span class="like" :class="{liked:comment.isLike}" @click="likeOrNot(comment.id)">
        <icon name="like" :scale="2"></icon>
        <span class="like-num">{{comment.like.length}}</span>
      </span>
      <router-link class="reply" :to="{name:'comment',params:{commentId:comment.id}}">
        <icon name="reply" :scale="2"></icon>
        <span class="reply-num">{{comment.reply}}</span>
      </router-link>
      <span class="delete" v-show="(this.$store.state.user==''&&comment.user=='小硫酸铜')||this.$store.state.user==comment.user" @click="deleteComment(comment.id)">
        <icon name="delete" :scale="2"></icon>
      </span>
    </div>
  </div>
</div>
</template>

<script>
import util from '../util/util'

export default {
  props: ['comment', 'icon'],
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
