<template>
  <li id="active-user">
    <div class="name">
      <h2>Name:</h2>
      
    </div>
    <div class="age">
      <h3>Age:</h3>
      
    </div>
  </li>

</template>

<script>

export default {
  data(){
    return{

    };
  },
}
</script>

<style scoped>
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
</style>