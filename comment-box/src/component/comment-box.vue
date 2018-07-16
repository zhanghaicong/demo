<template>
<div>
  <p>all comments</p>
  <textarea class="form-control" rows="3" placeholder="comment" v-model.trim="content" maxlength="100"></textarea>
  <button type="button" class="btn btn-secondary" @click="comment">comment</button>
  <input class="form-control" id="user" placeholder="zhanghaicong" maxlength="20" v-model.trim="user" @change="changeUser" />
  <commentList :commentList="commentList"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  data() {
    return {
      content: 'comment',
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
      if (this.content == '') {
        this.content = 'comment';
      }
      this.$store.dispatch('comment', this.content);
    },
  },
}
</script>

<style scoped>
p {
  margin-bottom: 20px;
}
</style>
