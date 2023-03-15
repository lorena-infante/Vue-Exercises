<template>
    <button @click="addOne"> Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //this is the name of the method inside the mutation/action *always call actions* that I want to call
      this.$store.dispatch('increment');
    }
  }
}
</script>