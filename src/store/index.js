import Vuex from 'vuex';
import post from './modules/post';
import ui from './modules/ui';

export default () => {
  const debug = process.env.NODE_ENV !== 'production';

  const store = new Vuex.Store({
    modules: {
      post,
      ui
    },
    strict: debug,
  });

  return store;
};
