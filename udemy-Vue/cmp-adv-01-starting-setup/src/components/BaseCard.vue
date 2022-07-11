<template>
<!-- slots are used inside of a general wrapper to give the content element a certain style
Slots are called inside the component where they are going to be used. In this case UserInfo.vue -->
 <div>
  <slot></slot>
 </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>