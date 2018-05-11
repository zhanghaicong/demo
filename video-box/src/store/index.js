 import Vue from 'vue'
 import Vuex from 'vuex'
 import axios from 'axios';
 import {
   headerData
 } from '../util/i18n';
 import {
   sortBy
 } from '../util/util';

 Vue.use(Vuex)

 const state = {
   headerData: headerData,
   isShowImg: true,
   filterStr: '',
   sohuList: []
 }

 axios.get('/sohuList.json').then(function(response) {
   response.data.list.sort(sortBy('name'));
   state.sohuList = response.data.list;
   console.log(response.data);
 }).catch(function(err) {
   console.log('sohuList error' + err);
 });

 const mutations = {
   updateFilterStr(state, value) {
     state.filterStr = value;
   },
   updateIsShowImg(state, value) {
     state.isShowImg = value;
   }
 }

 export default new Vuex.Store({
   state,
   mutations
 })
