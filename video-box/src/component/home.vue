<template>
<div>
  <div class="form-group">
    <label>filter</label>
    <input class="form-control" maxlength="10" v-model.trim="filterStr" />
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input" v-model="isShowImg"> show photo
    </label>
  </div>
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
  },
  computed: {
    filterStr: {
      get() {
        return this.$store.state.filterStr
      },
      set(value) {
        this.$store.commit('updateFilterStr', value)
      }
    },
    isShowImg: {
      get() {
        return this.$store.state.isShowImg
      },
      set(value) {
        this.$store.commit('updateIsShowImg', value)
      }
    }
  }
}
</script>

<style scoped>
#nav-tabContent {
  margin-top: 1rem;
}
</style>
