import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import App from './App.vue';
import store from './store';
import './assets/styles/index.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

Vue.filter('timeAgo', function (value) {
  if (!value) {
    return ''
  }

  let formattedDate = moment.unix(value).fromNow();

  return formattedDate;
})

new Vue({
  render: (h) => h(App),
  store: store()
}).$mount('#app');
