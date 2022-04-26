<template>
  <li>
    <form @submit.prevent = "addNewFriend">
      <h2>Agregar nuevo Amigo </h2>
      <div class="container">
        <label>Name</label>
        <br>
        <input type="text" v-model="name">
      </div>
      <div class="container">
        <label>Phone</label>
        <br>
        <input type="phone" v-model="phoneNumber">
      </div>
      <div class="container">
        <label>Email</label>
        <br>
        <input type="email" v-model="emailAddress">
      </div>
      <button class="btn-primary pt-2">Add</button>
    </form>
  </li>
</template>

<script>
  export default {
    emits:['add-friend'],
    data() {
      return {
        name: '',
        phoneNumber:'',
        emailAddress:'',

      };
    }
    ,
    methods:{
      addNewFriend() {
        this.$emit(
          'add-friend', 
          this.name,
          this.phoneNumber,
          this.emailAddress
        );
      },
    }
    

  }
</script>

<style lang="css" scoped>
  input {
    margin-bottom: 1rem;
  }
</style>