import Vuex from 'vuex';
import post from './modules/post';

export default () => {
  const debug = process.env.NODE_ENV !== 'production';

  const store = new Vuex.Store({
    modules: {
      post
    },
    strict: debug,
  });

  return store;
};
