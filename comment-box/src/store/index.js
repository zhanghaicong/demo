import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import {
  headerData
} from '../util/i18n';
import {
  getUUID
} from '../util/util';

Vue.use(Vuex)

const state = {
  sortBy: "Time",
  headerData: headerData,
  user: (localStorage['user'] == '' || localStorage['user'] == undefined) ? 'zhanghaicong' : localStorage['user'],
  commentList: (localStorage['commentList'] && JSON.parse(localStorage['commentList']) instanceof Array) ? JSON.parse(localStorage['commentList']) : [],
  replyList: (localStorage['replyList'] && JSON.parse(localStorage['replyList']) instanceof Array) ? JSON.parse(localStorage['replyList']) : [],
}

// getters
const getters = {
  commentListIsLike: state => {
    state.commentList.map(x => {
      x.isLike = x.like.includes(state.user);
      x.time = new String(x.time); //保证时间区域每次都能刷新
    });
    switch (state.sortBy) {
      case "Reply":
        state.commentList.sort((a, b) => b.reply - a.reply);
        break;
      case "Like":
        state.commentList.sort((a, b) => b.like.length - a.like.length);
        break;
      default:
        state.commentList.sort((a, b) => a.time - b.time);
    }
    return state.commentList;
  }
}

// actions
const actions = {
  changeSortBy({
    commit
  }, sortBy) {
    commit(types.CHANGE_SORTBY, sortBy);
  },
  changeUser({
    commit
  }, user) {
    commit(types.CHANGE_USER, user);
  },
  comment({
    commit
  }, content) {
    commit(types.COMMENT, content);
  },
  deleteComment({
    commit
  }, id) {
    commit(types.DELETE_COMMENT, id);
  },
  likeOrNot({
    commit
  }, id) {
    commit(types.LIKEORNOT, id);
  },
  reply({
    commit
  }, {
    commentId,
    content
  }) {
    commit(types.REPLY, {
      commentId,
      content
    });
  },
  deleteReply({
    commit
  }, id) {
    commit(types.DELETE_REPLY, id);
  }
}

// mutations
const mutations = {
  [types.CHANGE_SORTBY](state, sortBy) {
    state.sortBy = sortBy;
  },
  [types.CHANGE_USER](state, user) {
    state.user = user == '' ? 'zhanghaicong' : user;
    localStorage['user'] = state.user;
  },
  [types.COMMENT](state, content) {
    const id = 'c' + getUUID();
    const comment = {
      id: id,
      user: state.user,
      content: content,
      time: parseInt(new Date().getTime() / 1000),
      like: [],
      reply: 0,
    };
    console.log(comment);
    state.commentList.push(comment);
    saveToCache('commentList', state.commentList);
  },
  [types.DELETE_COMMENT](state, id) {
    let index = 0;
    state.commentList.map((x, i) => {
      if (x.id == id) {
        index = i;
        return;
      }
    });
    state.commentList.splice(index, 1);
    saveToCache('commentList', state.commentList);
  },
  [types.LIKEORNOT](state, id) {
    state.commentList.map((x) => {
      if (x.id == id) {
        let likeSet = new Set(x.like);
        likeSet.delete(state.user) ? x.like = [...likeSet] : x.like.push(state.user);
        return;
      }
    });
    saveToCache('commentList', state.commentList);
  },
  [types.REPLY](state, {
    commentId,
    content
  }) {
    const id = 'r' + getUUID();
    const reply = {
      id: id,
      user: state.user,
      commentId: commentId,
      content: content,
      time: parseInt(new Date().getTime() / 1000),
    };
    console.log(reply);
    state.replyList.push(reply);
    state.commentList.map(x => {
      x.id == commentId ? x.reply++ : '';
      return;
    });
    saveToCache('commentList', state.commentList);
    saveToCache('replyList', state.replyList);
  },
  [types.DELETE_REPLY](state, id) {
    let commentId = '';
    state.replyList.map((x, i) => {
      if (x.id == id) {
        state.replyList.splice(i, 1);
        commentId = x.commentId;
        return;
      }
    });
    state.commentList.map(x => {
      if (x.id == commentId) {
        x.reply--;
        return;
      }
    });
    saveToCache('commentList', state.commentList);
    saveToCache('replyList', state.replyList);
  },
}

const saveToCache = (key, value) => {
  localStorage[key] = JSON.stringify(value);
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
