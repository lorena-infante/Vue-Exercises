<template>
<button @click="goRouting">Go to Teams</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    goRouting(){
      //creates a new route navigation from a button inside a component:
      this.$router.push('/teams');
    },
    beforeEnter( to, from, next) {
      console.log('UsersList cmp beforeEnter');
      console.log(to, from);
      next();

    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>