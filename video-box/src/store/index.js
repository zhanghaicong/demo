import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  headerData: {
    title: 'video-box',
    badges: ['vue2', 'bootstrap4', 'axios', 'nodejs', 'express'],
    links: [{
      title: 'demo',
      href: 'https://zhanghaicong.github.io/'
    }, {
      title: 'github',
      href: 'https://github.com/zhanghaicong/demo/tree/master/video-box'
    }]
  },
  myVideo: [{
    name: '越狱第01季',
    id: '5703631',
    type: 'sohu',
  }]
}

export default new Vuex.Store({
  state
})
