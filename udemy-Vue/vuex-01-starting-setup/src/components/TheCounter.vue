<template>
    <h3>{{ finalCounter }}</h3>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
  //into the computed properties ALWAYS call mapGetters
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter'])
  },
}
</script>