<template>
<div class="container">
  <myHeader></myHeader>
  <router-view></router-view>
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
.line {
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
button{
  cursor: pointer;
}
button,textarea{
  margin-top: 10px;
}

#user {
  margin-top: 10px;
  width: 50%;
  float: right;
}
</style>
