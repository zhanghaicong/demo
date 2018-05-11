<template>
<div class="container">
  <myHeader :headerData="headerData"></myHeader>
  <form class="form-inline">
    <input type="text" class="form-control col-8 col-md-10" placeholder="Enter todo task" v-model.trim="task" maxlength="60">
    <button type="button" class="btn btn-primary col-4 col-md-2 cursor-pointer" @click="addToTodo">add</button>
  </form>
  <todoList></todoList>
  <doneList></doneList>
</div>
</template>

<script>
import myHeader from './component/header.vue'
import todoList from './component/todo-list.vue'
import doneList from './component/done-list.vue'

export default {
  data() {
    return {
      headerData: {
        title: 'vue-todo',
        links: [{
          title: 'demo',
          href: 'https://zhanghaicong.github.io/'
        },{
          title: 'project',
          href: 'https://github.com/zhanghaicong/vue/tree/master/demo/vue-todo'
        }]
      },
      task: '',
      doneList: this.$store.state.doneList
    }
  },
  components: {
    myHeader,
    todoList,
    doneList
  },
  methods: {
    addToTodo() {
      if (this.task != '') {
        this.$store.dispatch('addToTodo', this.task);
        this.task = '';
      }
    }
  }
}
</script>

<style scope>
a:hover {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}

.float-right {
  float: right;
}

.overflow-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

li .badge {
  margin-top: 4px;
}
</style>
