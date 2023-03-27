<template>
          <button @click="inc"> Add 2</button>
          <button @click="increase({ value: 11 })"> Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  //call ALWAYS mapActions in methods  
  methods: {
    // addOne() {
    //   //this is the name of the method inside the mutation/action *always call actions* that I want to call
    //   this.$store.dispatch('increment');
    // }
    //...mapActions(['increment', 'increase'])
    //another way of calling mapActions
    ...mapActions({
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>