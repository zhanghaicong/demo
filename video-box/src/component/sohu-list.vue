<template>
<div class="row">
  <div class="pull-left col-6 col-md-4 col-lg-3 col-xl-2" v-for="video in sohuList">
    <img :src="'http://'+video.photo" class="img-fluid rounded" v-show="$store.state.isShowImg" />
    <router-link :to="{name: 'sohu',params:{type: 'sohu',id:video.id}}">
      <p class="video-name"><span class="badge badge-primary">{{video.name}}</span></p>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  computed: {
    sohuList() {
      return this.$store.state.videoList.sohuList.list.filter(video => video.name.indexOf(this.$store.state.filterStr) !== -1)
    }
  }
}
</script>

<style scope>
.video-name {
  font-size: 0.8rem;
  margin-top: -0.6rem;
  margin-bottom: -0.3rem;
}

input {
  margin-bottom: 1rem;
}
</style>
