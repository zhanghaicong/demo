<template>
<div class="row">
  <div class="avatar col-2 col-lg-1">
    <router-link :to="{name:'user',params:{userId:reply.user}}">
      <img :src="getImg(reply.user)" class="shake-slow" />
    </router-link>
  </div>
  <div class="right col-10 col-lg-11">
    <router-link :to="{name:'user',params:{userId:reply.user}}" class="user">{{reply.user}}</router-link>
    <span class="time">{{getDateString(reply.time)}}</span>
    <strong class="content">{{reply.content}}</strong>
    <div class="icon">
      <span class="delete" v-show="(this.$store.state.user==''&&reply.user=='小硫酸铜')||this.$store.state.user==reply.user" @click="deleteReply(reply.id)">
        <icon name="delete" :scale="2"></icon>
      </span>
    </div>
  </div>
</div>
</template>

<script>
import util from '../util/util'

export default {
  props: ['reply'],
  methods: {
    deleteReply(id) {
      this.$store.dispatch('deleteReply', id);
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
