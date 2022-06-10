<template>
  <li>
    <form @submit.prevent = "addUser">
      <h1>Formulario del amigo</h1>
      <div class="container">
        <label>Name</label>
        <br>
        <input type="text" v-model="userName">
      </div>
      <div class="container">
        <label>Age</label>
        <br>
        <input type="number" v-model="userAge">
      </div>
      <br>
      <button class="btn-primary pt-2">Add User</button>
    </form>
  </li>
</template>

<script>

export default {
  emits: ['add-user'],
  data() {
    return {
      userName: '',
      userAge: '',
    };
  },
  methods:{
    addUser(){
      this.$emit(
        'add-user', 
        this.userName,
        this.userAge
      );
    }

  },

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}

#app h1 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}


</style>
