<template>
  <dialog open>
    <slot />
  </dialog>
</template>

<style scoped>
  dialog {
    position: fixed;
    top: 20vh;
    left: 50%;
    right: 50%;
    background: #0075c4;
    color: white;
    box-shadow: 0 2 8 rgba(0, 0, 0, 0.26);
  }
</style>