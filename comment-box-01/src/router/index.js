import Vue from 'vue';
import VueRouter from 'vue-router';

import commentBox from '../component/comment-box.vue'
import replyBox from '../component/reply-box.vue'
import userComment from '../component/user-comment.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: commentBox
  }, {
    name: 'comment',
    path: '/comment:commentId',
    component: replyBox
  },
  {
    name: 'user',
    path: '/user:userId',
    component: userComment
  },
];

const router = new VueRouter({
  routes
});

export default router;
