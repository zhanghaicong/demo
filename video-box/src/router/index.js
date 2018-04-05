import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../component/home.vue'
import sohuInfo from '../component/sohu-info.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: home
}, {
  name: 'sohu',
  path: '/:type/:id',
  component: sohuInfo
}, ];

const router = new VueRouter({
  routes
});

export default router;
