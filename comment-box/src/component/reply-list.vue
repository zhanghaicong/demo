<template>
<div id="reply" class="col-xs-12" v-show="replyList.length>0" style="display:none;border-bottom:0px;">
  <replyDetail v-for="reply in replyList" :reply="reply"></replyDetail>
</div>
</template>

<script>
import replyDetail from './reply-detail.vue'

export default {
  props: ['replyList'],
  components: {
    replyDetail,
  },
}
</script>
