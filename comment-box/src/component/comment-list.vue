<template>
<div id="comment" class="col-xs-12" v-show="commentList.length>0" style="display:none;border-bottom:0px;">
  <commentDetail v-for="comment in commentList" :comment="comment"></commentDetail>
</div>
</template>

<script>
import commentDetail from './comment-detail.vue'

export default {
  components: {
    commentDetail,
  },
  computed: {
    commentList() {
      return this.$store.getters.commentListIsLike;
    },
  },
}
</script>

<style scoped>
#comment {
  margin-top: 30px;
}
</style>
