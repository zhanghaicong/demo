<template>
<div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input" v-model="show"> show photo
    </label>
  </div>
  <div class="row">
    <div class="pull-left col-6 col-md-4 col-lg-3 col-xl-2" v-for="video in $store.state.sohuList.list">
      <img :src="'http://'+video.photo" class="img-fluid rounded" v-show="show" />
      <router-link :to="{name: 'sohu',params:{type: 'sohu',id:video.id}}">
        <p class="video-name"><span class="badge badge-primary">{{video.name}}</span></p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scope>
.video-name {
  font-size: 0.8rem;
  margin-top: -0.6rem;
  margin-bottom: -0.3rem;
}

input {
  margin-bottom: 1rem;
}
</style>
