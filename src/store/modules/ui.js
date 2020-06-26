import http from '../../services/http';

// Initial state
const state = () => ({
  navbar: true,
  gallery: [],
  isLoading: false
});

// Getters
const getters = {};

// Actions
const actions = {
  toggleNavBar({ commit }) {
    commit('toggleNavBar');
  },
  async saveImage({ commit }, payload) {
    commit('setLoading', true);

    const response = await http.post('image', {
      reddit_url: payload
    });

    commit('saveImage', response);
  }
};

// Mutations
const mutations = {
  toggleNavBar(state) {
    state.navbar = !state.navbar;
  },
  saveImage(state, payload) {
    state.gallery.push(payload);
    state.isLoading = false;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
