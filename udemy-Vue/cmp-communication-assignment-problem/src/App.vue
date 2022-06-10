<template>
  <div id="app">
    <user-data />
    <active-user />
  </div>
</template>

<script>
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue'

export default {
  name:'App',
  components:{
    UserData,
    ActiveUser,

  },
}
</script>
