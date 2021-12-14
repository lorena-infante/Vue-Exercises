const app = new Vue({
    el: '#assignment',
    data:{
        name:'My name is Lorena', 
        age: 26,
        link: 'https://cdn.pixabay.com/photo/2021/11/16/08/01/animal-6800387_1280.jpg',
        textPlaceholder:'Hello world!'
    },
    methods:{
        agePlusFive(){
            newAge = this.age + 5;
            return newAge;
        },
        randomNumber(){
            const number = Math.random();
            if(number <=1){
                console.log(number);
                return number.toFixed(3);
            }else return
            
        }
    }


})