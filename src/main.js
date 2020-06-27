import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueGallery from 'vue-gallery';
import Toasted from 'vue-toasted';
import Router from './Router.vue';
import store from './store';
import routes from './routes';
// Filters
import timeAgo from './common/timeAgo';
import kFormatter from './common/kFormatter';

import './assets/styles/index.css';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Toasted, { position: 'bottom-right', duration: 2000 });
// Global Components
Vue.component('VGallery', VueGallery);

const router = new VueRouter({ mode: 'history', routes });

Vue.filter('timeAgo', timeAgo);
Vue.filter('kFormatter', kFormatter);

new Vue({
  render: (h) => h(Router),
  store: store(),
  router
}).$mount('#app');
