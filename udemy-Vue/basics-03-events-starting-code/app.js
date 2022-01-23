const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  computed:{
//the computed properties are methods that don't need to be called with () inside html. This function works as a function but is rendered as an object of data() and it's executed the times that the variable used is modified. Do not affect the whole app.
    fullName(){
      
      if(this.name === ''){
        return this.name ='';
      }
      console.log('It is running again'); 
      return this.name + ' ' + 'Infante';
    }

  },
  methods: {
    //methods are still called inside our v-on, v.click, etc
    submitForm(){
      alert('Request sent!');
      
    },
    add(num){
      this.counter = this.counter + num;
    },

    reduce(num){
      this.counter = this.counter  - num;
    },

    setName(e){
      this.name = e.target.value ;

    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name = '';
    },
    /*If outputFullName is called as a method inside html it will affect the performance.
     Se recarga TODA la página*/
    outputFullName(){
      console.log('Running Again');
      if(this.name === ''){
        return this.name ='';

      } return this.name + ' ' + 'Infante';

    }
  }
});

app.mount('#events');
