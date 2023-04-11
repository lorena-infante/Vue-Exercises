<template>
      <base-container title="Vuex" v-show="!isLogged">
      <the-counter></the-counter>
        <favorite-value></favorite-value>
        <button @click="addOne">Add 10</button>
        <change-counter></change-counter>
      </base-container>
        <base-container title="Auth">
          <user-auth></user-auth>
        </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  data() {
    return {
      isLogged: false,
    }
  },
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },

  methods: {
    addOne() {
      /*commit: mutations, dispatch: actions*/
      //one way of setting the commit
      //this.$store.commit('increase', { value: 10 });
      //another way
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    },
    clickLogin() {
      console.log('clicked login');
      return this.isLogged = true;
    },
    clickLogout() {
      console.log('clicked logout');
      return this.isLogged = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>