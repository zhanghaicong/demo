import Vue from 'vue'

import store from './store'
import router from './router';
import App from './App.vue'

import './css/common.css'

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
