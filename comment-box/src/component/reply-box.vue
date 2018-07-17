<template>
<div>
  <router-link to="/">all comments</router-link>
  <p>replies of comment</p>
  <commentDetail :comment="comment"></commentDetail>
  <div style="margin-bottom:30px;">
    <textarea class="form-control" rows="3" placeholder="reply" v-model.trim="content" maxlength="100"></textarea>
    <button type="button" class="btn btn-secondary" @click="reply">reply</button>
    <input class="form-control" id="user" placeholder="zhanghaicong" maxlength="20" v-model.trim="user" />
  </div>
  <replyList :commentId="this.$route.params.commentId"></replyList>
</div>
</template>

<script>
import commentDetail from './comment-detail.vue'
import replyList from './reply-list.vue'

export default {
  data() {
    return {
      content: 'reply',
    }
  },
  components: {
    commentDetail,
    replyList,
  },
  computed: {
    comment() {
      for (let x of this.$store.getters.commentListIsLike) {
        if (x.id == this.$route.params.commentId) {
          return x;
        }
      };
      location.href = './';
    },
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.dispatch('changeUser', value);
      }
    }
  },
  methods: {
    reply() {
      if (this.content == '') {
        this.content = 'reply';
      }
      this.$store.dispatch('reply', {
        commentId: this.$route.params.commentId,
        content: this.content
      });
    }
  }
}
</script>
<style scoped>
p {
  margin-top: 20px;
}
</style>
