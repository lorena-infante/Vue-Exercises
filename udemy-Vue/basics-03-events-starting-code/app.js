const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods: {
    
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
    //If outputFullName is called as a method inside html it will affect the performance
    outputFullName(){
      console.log('Running Again');
      if(this.name === ''){
        return this.name ='';

      } return this.name + ' ' + 'Infante';

    }
  }
});

app.mount('#events');
