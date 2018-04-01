import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../component/home.vue'
import sohu from '../component/sohu.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: home
}, {
  name: 'sohu',
  path: '/:type/:id',
  component: sohu
}, ];

const router = new VueRouter({
  routes
});

export default router;
