import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import moment from 'moment';
import Router from './Router.vue';
import store from './store';
import routes from './routes';
import './assets/styles/index.css';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

Vue.filter('timeAgo', function (value) {
  if (!value) {
    return ''
  }

  let formattedDate = moment.unix(value).fromNow();

  return formattedDate;
})

new Vue({
  render: (h) => h(Router),
  store: store(),
  router
}).$mount('#app');
