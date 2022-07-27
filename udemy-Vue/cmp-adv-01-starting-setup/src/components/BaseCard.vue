<template>
<!-- slots are used inside of a general wrapper to give the content element a certain style
Slots are called inside the component where they are going to be used. In this case UserInfo.vue
slots have names, but the ONE that doesn't, it's called "default". v-slot === # -->
 <div>
  <header v-if ='$slots.header'>
    <slot name="header">
      <!-- <h1>The default title</h1> -->
    </slot>
  </header>
  <slot></slot>
 </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$slots.header);
  }

}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>