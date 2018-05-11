<template>
<div id="done-list">
  <h5>
    <span>done</span>
    <span class="badge badge-secondary">{{doneList.length}}</span>
  </h5>
  <ul class="list-group" v-show="doneList.length>0">
    <li class="list-group-item overflow-ellipsis form-inline" v-for="(done,index) in doneList">
      <span class="cursor-pointer" @click="todo(index)">{{done}}</span>
      <span class="badge badge-secondary float-right cursor-pointer" @click="removeFromDone(index)">X</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      doneList: this.$store.state.doneList
    }
  },
  methods: {
    todo(index) {
      this.$store.dispatch('todo', index);
    },
    removeFromDone(index) {
      this.$store.dispatch('removeFromDone', index);
    }
  }
}
</script>

<style scope>
#done-list h5 .badge {
  margin-top: 10px;
}
</style>
