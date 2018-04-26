import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../component/home.vue'
import sohuInfo from '../component/sohu-info.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: home,
  meta: {
    title: 'video list'
  }
}, {
  name: 'sohu',
  path: '/:type/:id',
  component: sohuInfo,
  meta: {
    title: 'loading...'
  }
}];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router;
