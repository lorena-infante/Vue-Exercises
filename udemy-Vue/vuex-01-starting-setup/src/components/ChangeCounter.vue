<template>
    <button @click="addOne"> Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //this is the name of the method inside the mutation that I want to call
      this.$store.commit('increment');
    }
  }
}
</script>