<template>
<div>
  <router-link to="/">all comments</router-link>
  <p>replies of comment</p>
  <commentList :commentList="commentList"></commentList>
  <div style="margin-bottom:30px;">
    <textarea class="form-control" rows="3" placeholder="reply" v-model.trim="content" maxlength="100"></textarea>
    <button type="button" class="btn btn-secondary" @click="reply">reply</button>
    <input class="form-control" id="user" placeholder="zhanghaicong" maxlength="10" v-model.trim="user" @change="changeUser" />
  </div>
  <replyList :replyList="replyList"></replyList>
</div>
</template>

<script>
import commentList from './comment-list.vue'
import replyList from './reply-list.vue'

export default {
  data() {
    return {
      content: 'reply',
      user: this.$store.state.user,
    }
  },
  computed: {
    commentList() {
      let commentList = [];
      this.$store.getters.commentListIsLike.map(x => {
        x.id == this.$route.params.commentId ? commentList.push(x) : '';
      });
      if (commentList.length == 0) {
        location.href = './';
      }
      return commentList;
    },
    replyList() {
      let replyList = [];
      this.$store.state.replyList.map(x => {
        x.commentId == this.$route.params.commentId ? replyList.push(x) : '';
        x.time = new String(x.time); //保证时间区域每次都能刷新
      });
      return replyList;
    },
  },
  components: {
    commentList,
    replyList,
  },
  methods: {
    changeUser() {
      this.$store.dispatch('changeUser', this.user);
    },
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
