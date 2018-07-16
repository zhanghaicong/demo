<template>
<div id="reply" class="col-xs-12" v-show="replyList.length>0" style="display:none;border-bottom:0px;">
  <replyDetail v-for="reply in replyList" :reply="reply"></replyDetail>
</div>
</template>

<script>
import replyDetail from './reply-detail.vue'

export default {
  props: ['commentId'],
  components: {
    replyDetail,
  },
  computed: {
    replyList() {
      let replyList = [];
      this.$store.state.replyList.map(x => {
        if (x.commentId == this.commentId) {
          x.time = new String(x.time); //保证时间区域每次都能刷新
          replyList.push(x);
        }
      });
      return replyList;
    },
  },
}
</script>
