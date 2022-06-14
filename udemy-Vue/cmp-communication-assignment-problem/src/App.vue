<template>
  <div id="app">
    <user-data 
    @add-user="addUser" />
    <active-user
      :userName = 'userName'
      :userAge = 'userAge' />
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
  data() {
    return{
      userName: '',
      userAge: 0,
      
    };
  },
  methods:{
    addUser(name, age){
      this.userName = name;
      this.userAge = age;
      console.log(this.userName, this.userAge);      

    }
  }
}
</script>
