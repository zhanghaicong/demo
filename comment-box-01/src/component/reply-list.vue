<template>
<div id="reply" class="col-xs-12" v-show="replyList.length>0" style="display:none;border-bottom:0px;">
  <li v-for="reply in replyList">
    <table class="tourist-table">
      <tbody>
        <replyDetail :reply="reply"></replyDetail>
      </tbody>
    </table>
    <div class="line"></div>
  </li>
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

<style scope>
li {
  list-style-type: none;
}

table {
  margin: 10px 0px;
}

#reply {
  border: 1px solid #e2e2e2;
  background-color: white;
  font-size: 90%;
  border-radius: 5px;
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
}
</style>
