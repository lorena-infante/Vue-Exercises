import { createApp } from 'vue';
import { createStore } from 'vuex';


import App from './App.vue';

// modules

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    //getter calling another getter
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
}

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
  mutations: {
    loginUser(state, payload) {
      state.isLoggedIn = payload.userIsLoggedIn;
      console.log(`state.isLoggedIn: ${payload.userIsLoggedIn}`);
    },
    logoutUser(state, payload) {
      state.isLoggedIn = payload.userIsLoggedIn;
      console.log(`state.isLoggedIn: ${payload.userIsLoggedIn}`);
    },


  },
  //actions receive async functions, as mutations don't. Actions work between components and mutations

  actions: {
    loginUser(context) {
      context.commit('loginUser', { userIsLoggedIn: true });
    },
    logoutUser(context) {
      context.commit('logoutUser', { userIsLoggedIn: false });
    }

  },

  getters: {
    userIsLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
