<template>
  <div id="user-data">
    <form class="user-data-form">
      <label for="name">Name</label>
      <input type="text" placeholder="add your name here">
      <label for="name">Age</label>
      <input type="text" placeholder="add your age here">
    </form>
  </div>
</template>

<script>
export default {
data(){
  return{

  };
},
}
</script>
<style scoped lang="css">
  .user-data-form {
    display:flex;
  }

</style>
