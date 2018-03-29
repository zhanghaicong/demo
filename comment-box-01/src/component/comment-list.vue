<template>
<div id="comment" class="col-xs-12" v-show="commentList.length>0" style="display:none;border-bottom:0px;">
  <li v-for="comment in commentList">
    <table class="tourist-table">
      <tbody>
        <commentDetail :comment="comment"></commentDetail>
      </tbody>
    </table>
    <div class="line"></div>
  </li>
</div>
</template>

<script>
import commentDetail from './comment-detail.vue'

export default {
  props: ['commentList'],
  components: {
    commentDetail,
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

#comment {
  border: 1px solid #e2e2e2;
  background-color: white;
  font-size: 90%;
  border-radius: 5px;
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
}
</style>
