<template>
<div>
  <p>all comments</p>
  <textarea class="form-control" rows="3" placeholder="comment" v-model.trim="content" maxlength="100"></textarea>
  <button type="button" class="btn btn-secondary" @click="comment">comment</button>
  <input class="form-control" id="user" placeholder="zhanghaicong" maxlength="20" v-model.trim="user" />
  <div id="Sort-By" class="input-group mb-3">
    <select class="custom-select" v-model="sortBy">
      <option value="Time">Sort By Time</option>
      <option value="Reply">Sort By Reply</option>
      <option value="Like">Sort By Like</option>
    </select>
  </div>
  <commentList :commentList="this.$store.getters.commentListIsLike"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  data() {
    return {
      content: 'comment',
    }
  },
  components: {
    commentList,
  },
  computed: {
    sortBy: {
      get() {
        return this.$store.state.sortBy;
      },
      set(value) {
        this.$store.dispatch('changeSortBy', value);
      }
    },
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.dispatch('changeUser', value);
      }
    },
  },
  methods: {
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

#Sort-By {
  margin-top: 30px;
}
</style>
