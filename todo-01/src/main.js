import Vue from 'vue'
import Vuex from 'vuex'

import store from './store'
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
