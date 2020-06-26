// Initial state
const state = () => ({ navbar: true });

// Getters
const getters = {};

// Actions
const actions = {
  toggleNavBar({ commit }) {
    commit('toggleNavBar');
  }
};

// Mutations
const mutations = {
  toggleNavBar(state) {
    state.navbar = !state.navbar;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
