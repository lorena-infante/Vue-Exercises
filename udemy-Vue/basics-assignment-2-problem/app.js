const app = Vue.createApp ({
    
    data(){
        return{
            inputText:'',
            inputTextEnter:''
            
        }
    },
    methods:{
        showAlert(){
            alert('Hey! An alert here!');
        },
        showInput(e){
            this.inputText = e.target.value;
        },
        showInputEnter(e){
            this.inputTextEnter = e.target.value;
        }

    }


});

app.mount("#assignment");