import http from '../../services/http';
import get from 'lodash/get';

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
  async getImages({ commit }) {
    commit('setLoading', true);

    const response = await http.get('image');
    let data = get(response, 'data', []);

    commit('getImages', data);
  },
  async saveImage({ commit }, payload) {
    commit('setLoading', true);

    const response = await http.post('image', {
      reddit_url: payload
    });

    this._vm.$toasted.show('Image saved');

    commit('saveImage', response);
  },
  async deleteImage({ commit }, id) {
    await http.delete('image', { data: { id } });

    commit('deleteImage', id);
  }
};

// Mutations
const mutations = {
  toggleNavBar(state) {
    state.navbar = !state.navbar;
  },
  getImages(state, payload) {
    state.gallery = payload;
    state.isLoading = false;
  },
  saveImage(state, payload) {
    state.gallery.push(payload);
    state.isLoading = false;
  },
  deleteImage(state, id) {
    state.gallery = state.gallery.filter((image) => image._id !== id);
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
