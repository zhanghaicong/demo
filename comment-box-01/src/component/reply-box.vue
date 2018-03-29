<template>
<div>
  <router-link to="/">所有评论</router-link>
  <textarea class="form-control" rows="3" placeholder="回复" v-model.trim="content" maxlength="100"></textarea>
  <button type="button" class="btn btn-secondary" @click="reply">回复</button>
  <input class="form-control" id="user" placeholder="小硫酸铜" maxlength="10" v-model.trim="user" @change="changeUser" />
  <commentList :commentList="commentList"></commentList>
  <p style="margin-top:20px;">该评论的回复（{{replyList.length}}）</p>
  <replyList :replyList="replyList"></replyList>
</div>
</template>

<script>
import commentList from './comment-list.vue'
import replyList from './reply-list.vue'

export default {
  data() {
    return {
      content: '回复',
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
        location.href = '/';
      }
      return commentList;
    },
    replyList() {
      let replyList = [];
      this.$store.state.replyList.map(x => {
        x.commentId == this.$route.params.commentId ? replyList.push(x) : '';
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
      if (this.content != '') {
        this.$store.dispatch('reply', {
          commentId: this.$route.params.commentId,
          content: this.content
        });
        this.content = '回复';
      }
    }
  }
}
</script>
