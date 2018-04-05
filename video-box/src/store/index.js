import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import util from '../util/util';

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
  sohuList: {}
}

axios.get('/sohuList.json').then(function(response) {
  state.sohuList = response.data;
  state.sohuList.list.sort(util.sortBy('name'));
  console.log(response.data);
}).catch(function(err) {
  console.log('sohuList error' + err);
});

export default new Vuex.Store({
  state
})
