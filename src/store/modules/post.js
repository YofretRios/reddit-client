import http from '../../services/http';
import get from 'lodash/get';

// Initial state
const state = () => ({
  posts: [],
  after: null,
  before: null,
  dist: null,
  selectedPost: {}
});

// Getters
const getters = {};

// Actions
const actions = {
  async fetchPost({ commit }, payload) {
    const response = await http.get('top');
    let data = get(response, 'data', {});

    commit('fetchPost', data);
  },
  fetchMore({ commit }, payload) {
    // TODO fetch more post if available
    commit('fetchMore', []);
  },
  dismiss({ commit }, id) {
    commit('dismissPost', id);
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
  dismiss(state, id) {
    // TODO Dismiss functionality
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
