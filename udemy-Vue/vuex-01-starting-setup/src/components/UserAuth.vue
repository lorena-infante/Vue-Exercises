<template>
    <button @click="userLogin" v-if="!isLoggedIn">Login</button>
    <button @click="userLogout" v-if="isLoggedIn">Logout</button>
</template>


<script>
export default {
  /* eslint-disable */
  methods: {
    userLogin() {
      this.$store.dispatch('loginUser');
    },
    userLogout() {
      this.$store.dispatch('logoutUser');
    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.userIsLoggedIn;
    }
  }
}
</script>

<style>
.d-none {
  display: none;
}

.d-flex {
  display: flex;
}
</style>