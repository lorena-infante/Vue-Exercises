<template>
<div>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal">
  <button @click="setGoal()">Set goal </button>
  <!--teleport helps us to move the content to another place inside the DOM-->
  <teleport to="body">
    <error-alert v-if="isInputInvalid">
      <h2>Please enter a valid input</h2>
      <p>At least 1 char, don't be lazy</p>
      <button class="error" @click="setClose()">Close and start again</button>
    </error-alert>
  </teleport>
</div>

</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
 data (){
  return {
    isInputInvalid: false,
  }
 },
 components: {
   ErrorAlert,
 },
 methods: {
  setGoal(){
    // this.$refs.goal.value puede reemplazar el v-model. Funciona igual en este caso
    const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.isInputInvalid = true;
      } 
  },
  
  setClose(){
    this.isInputInvalid = false;
  },
 },
}
</script>
<style scoped>
  .error {
    padding: 10px;
    background: #d65108;
    color: white;
    border-radius: 5px;
    border: none;
  }
</style>
