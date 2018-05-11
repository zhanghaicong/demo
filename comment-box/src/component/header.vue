<template>
<div class="main">
  <a v-for="link in headerData.links" :href="link.href" :title="link.icon">
    <icon :name="link.icon" :scale="4"></icon>
  </a>
  <p>
    <span v-for="badge in headerData.badges" class="badge badge-info">{{badge}}</span>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      headerData: this.$store.state.headerData
    }
  },
  created() {
    document.title = this.$store.state.headerData.title;
  }
}
</script>

<style scoped>
.main {
  margin: 0 auto;
  margin: 40px 0;
}

a {
  margin-right: 30px;
}

p{
  margin-top: 10px;
  float: right;
}

span{
  margin-right: 10px;
}
</style>
