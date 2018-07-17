<template>
<div>
  <router-link to="/">all comments</router-link>
  <p>comments of {{$route.params.userId}}</p>
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
      const commentList = this.$store.getters.commentListIsLike.filter(x => x.user == this.$route.params.userId);
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
