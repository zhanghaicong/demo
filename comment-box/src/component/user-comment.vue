<template>
<div>
  <router-link to="/">所有评论</router-link>
  <p>{{$route.params.userId}}的评论（{{commentList.length}}）</p>
  <commentList :commentList="commentList"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  components: {
    commentList,
  },
  computed: {
    commentList() {
      let commentList = [];
      this.$store.getters.commentListIsLike.map(x => {
        x.user == this.$route.params.userId ? commentList.push(x):'';
      });
      if (commentList.length == 0) {
        location.href = './';
      }
      return commentList;
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 20px;
}
</style>
