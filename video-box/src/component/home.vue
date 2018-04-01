<template>
<div>
  <router-link v-for="video in $store.state.myVideo" :to="{name:video.type,params:{type:video.type,id:video.id}}">{{video.name}}</router-link>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scope>
</style>
