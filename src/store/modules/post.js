import http from '../../services/http';
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';

const limit = 15;

// Initial state
const state = () => ({
  posts: [],
  after: null,
  before: null,
  dist: 0,
  selectedPost: null,
  fetchingMore: false,
});

// Getters
const getters = {};

// Actions
const actions = {
  async fetchPost({ commit }, payload) {
    const { subreddit, count, after } = payload;
    const response = await http.get('top', {
      params: {
        limit,
        subreddit,
        count,
        after: null
      }
    });
    let data = get(response, 'data', {});

    commit('fetchPost', data);
  },
  async fetchMore({ commit, state }, payload) {
    const { subreddit, count, after } = payload;

    commit('loading', true);

    const response = await http.get('top', {
      params: {
        limit,
        subreddit,
        count: state.dist + limit,
        after: state.after
      }
    });

    let data = get(response, 'data', {});

    commit('fetchMore', data);
  },
  async setPost({ commit }, payload) {
    commit('setPost', payload);

    await http.post('markAsRead', {
      reddit_id: payload.id
    });
  },
  async dismiss({ commit }, id) {
    commit('dismiss', id);

    await http.post('dismiss', { reddit_id: id });
  },
  dismissAll({ commit }) {
    commit('dismissAll');
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
    state.posts = state.posts.concat(get(payload, 'children', []));
    state.after = payload.after;
    state.before = payload.before;
    state.dist = state.dist + limit;
    state.fetchingMore = false;
  },
  setPost(state, payload) {
    const index = findIndex(state.posts, (post) => post.data.id === payload.id);

    state.posts[index].data.visited = true;
    state.selectedPost = payload;
  },
  dismiss(state, id) {
    state.posts = state.posts.filter((post) => post.data.id !== id);
  },
  dismissAll(state) {
    state.posts = [];
  },
  loading(state, value) {
    state.fetchingMore = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
