<template>
<div class="row">
  <div class="pull-left col-6 col-md-4 col-lg-3 col-xl-2" v-for="video in videoList">
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
      sohuList: []
    }
  },
  computed: {
    videoList() {
      return this.$store.state.sohuList.filter(video => video.name.indexOf(this.$store.state.filterStr) !== -1)
    }
  }
}
</script>
