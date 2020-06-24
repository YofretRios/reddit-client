import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store';
import './assets/styles/index.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  store: store()
}).$mount('#app');
