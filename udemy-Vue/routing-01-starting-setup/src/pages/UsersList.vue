<template>
<button @click="goRouting">Go to Teams</button>
<button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data(){
    return {
      savedChanges: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    goRouting(){
      //creates a new route navigation from a button inside a component:
      this.$router.push('/teams');
    },
    saveChanges(){
      this.savedChanges = true;
      console.log('changes saved!');
    },
   
  },
  beforeRouteEnter(to, from, next){
    console.log('UsersList cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('UsersList cmp beforeRouteLeave');
    console.log(to,from);
    if (this.savedChanges) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure you want to leave? All changes will be lost!');
      next(userWantsToLeave);
    }

  },
  unmounted(){
    console.log('unmounted');
  }
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