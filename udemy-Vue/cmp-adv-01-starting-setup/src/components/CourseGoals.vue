<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- scoped slots are used to format certain data, using props from the component to the App.vue -->
      <slot :item="goal" another="ola" ></slot>
    </li>
  </ul>
</template>

<script>
export default{
  data(){
    return {
      goals: ['Finish the course','Learn Vue'],
    };
  }
}
</script>
