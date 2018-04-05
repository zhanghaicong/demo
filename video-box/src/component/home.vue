<template>
<div>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#sohu-mei" role="tab" aria-controls="nav-home" aria-selected="true">搜狐美剧</a>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="sohu-mei" role="tabpanel" aria-labelledby="pills-home-tab">
      <sohuList></sohuList>
    </div>
  </div>
</div>
</template>

<script>
import sohuList from './sohu-list.vue';

export default {
  data() {
    return {}
  },
  components: {
    sohuList,
  }
}
</script>

<style scope>
#nav-tabContent{
  margin-top: 1rem;
}
</style>
