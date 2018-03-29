<template>
<div class="jumbotron">
  <h1>{{headerData.title}}</h1>
  <h5><span v-for="badge in headerData.badges" class="badge badge-secondary">{{badge}}</span></h5>
  <a class="btn btn-secondary btn-sm" v-for="link in headerData.links" :href="link.href">{{link.title}}</a>
</div>
</template>

<script>
export default {
  data() {
    return {
      headerData: this.$store.state.headerData
    }
  }
}
</script>

<style scope>
a {
  margin-top:10px;
  margin-right: 10px;
}

h5{
  margin-top:15px;
}

span {
  margin-right: 10px;
}
</style>
