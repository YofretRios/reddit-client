// Initial state
const state = () => ({
  posts: [],
  selectedPost: {}
});

// Getters
const getters = {};

// Actions
const actions = {
  fetchPost({ commit }, payload) {
    // TODO fetch top post from reddit
    commit('fetchPost', []);
  },
  fetchMore({ commit }, payload) {
    // TODO fetch more post if available
    commit('fetchPost', []);
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
    state.posts = payload;
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
