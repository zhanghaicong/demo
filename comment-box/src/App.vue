<template>
<div class="container">
  <myHeader></myHeader>
  <router-view></router-view>
  <p style="text-align:center;font-size:10px;margin-top:30px;">© 2018 <a href="https://github.com/zhanghaicong/" target="_blank">zhanghaicong</a></p>
</div>
</template>

<script>
import myHeader from './component/header.vue'

export default {
  components: {
    myHeader,
  }
}
</script>

<style>
</style>
