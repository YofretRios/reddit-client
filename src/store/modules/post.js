import http from '../../services/http';
import get from 'lodash/get';

// Initial state
const state = () => ({
  posts: [],
  after: null,
  before: null,
  dist: null,
  selectedPost: null
});

// Getters
const getters = {};

// Actions
const actions = {
  async fetchPost({ commit }, payload) {
    const { subreddit, count, after } = payload;
    const response = await http.get('top', {
      params: {
        subreddit,
        count,
        after: null
      }
    });
    let data = get(response, 'data', {});

    commit('fetchPost', data);
  },
  fetchMore({ commit }, payload) {
    // TODO fetch more post if available
    commit('fetchMore', []);
  },
  setPost({ commit }, payload) {
    //TODO call mark as read endpoint
    commit('setPost', payload);
  },
  dismiss({ commit }, id) {
    // TODO call dismiss endpoint
    commit('dismiss', id);
  },
  markAsRead({ commit }, id) {
    commit('markAsRead');
  }
};

// Mutations
const mutations = {
  fetchPost(state, payload) {
    state.posts = get(payload, 'children', []);
    state.after = payload.after;
    state.before = payload.before;
    state.dist = payload.dist;
  },
  fetchMore(state, payload) {
    state.posts = state.posts.concat(payload);
  },
  setPost(state, payload) {
    state.selectedPost = payload;
  },
  dismiss(state, id) {
    state.posts = state.posts.filter((post) => post.data.id !== id);
  },
  markAsRead(state, id) {
    // TODO mark as read
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
