import Vuex from 'vuex';
import post from './modules/post';

// const debug = process.env.NODE_ENV !== 'production';

// const store = new Vuex.Store({
//   modules: {
//     post
//   },
//   strict: debug,
// });

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
