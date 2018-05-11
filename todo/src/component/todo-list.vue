<template>
<div id="todo-list">
  <h5>
    <span>todo</span>
    <span class="badge badge-secondary">{{todoList.length}}</span>
  </h5>
  <ul class="list-group" v-show="todoList.length>0">
    <li class="list-group-item overflow-ellipsis form-inline" v-for="(todo,index) in todoList">
      <span class="cursor-pointer" @click="done(index)">{{todo}}</span>
      <span class="badge badge-secondary float-right cursor-pointer" @click="removeFromTodo(index)">X</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      todoList: this.$store.state.todoList
    }
  },
  methods: {
    done(index) {
      this.$store.dispatch('done', index);
    },
    removeFromTodo(index) {
      this.$store.dispatch('removeFromTodo', index);
    }
  }
}
</script>

<style scope>
#todo-list h5 .badge {
  margin-top: 20px;
  margin-left: 3px;
}
</style>
