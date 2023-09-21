import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js'

const store = createStore({
  modules: {
    //namespace: name
    counter: counterModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  //actions receive async functions, as mutations don't. Actions work between components and mutations
  actions: rootActions,
  getters: rootGetters
});

export default store;