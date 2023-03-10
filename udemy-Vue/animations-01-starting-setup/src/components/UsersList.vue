<template>
  <ul>
    <li v-for="user in users" 
      @click="removeUser(user)" 
      :key="user">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" ref="userNameInput"/>
    <button @click="addUser()">Add User</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: ['Lorena', 'Francisco', 'Mateo', 'Poio', 'Po']
    }; 
  },
  methods: {
    addUser(){
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user){
      this.users = this.users.filter(usr => usr !== user);
    }
  }

}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 1rem 0;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;

  }
</style>