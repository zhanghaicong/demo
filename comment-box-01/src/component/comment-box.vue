<template>
<div>
  <textarea class="form-control" rows="3" placeholder="评论" v-model.trim="content" maxlength="100"></textarea>
  <button type="button" class="btn btn-secondary" @click="comment">评论</button>
  <input class="form-control" id="user" placeholder="小硫酸铜" maxlength="10" v-model.trim="user" @change="changeUser" />
  <commentList :commentList="commentList"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  data() {
    return {
      content: '评论',
      user: this.$store.state.user,
    }
  },
  computed: {
    commentList() {
      return this.$store.getters.commentListIsLike;
    }
  },
  components: {
    commentList,
  },
  methods: {
    changeUser() {
      this.$store.dispatch('changeUser', this.user);
    },
    comment() {
      if (this.content != '') {
        this.$store.dispatch('comment', this.content);
        this.content = '评论';
      }
    },
  },
}
</script>
