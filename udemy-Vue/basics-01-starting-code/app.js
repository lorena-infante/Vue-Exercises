/*const app = Vue.createapp({
    data(){
        //always returns an object!
        return{
            courseGoal: 'Finish the curse and learn Vue!'
        }
    }


});
//If we control a HTML element with Vue, we'll also control all child elements of that element!
app.mount('#user-goal');*/

new Vue({
    el: '#user-goal',
    data: {
        
        courseGoalA:'Este es el curso A',
        courseGoalB:'Este es el curso B',
        courseHTML:'<h3>Este es un curso con TAGS html</h3>',

        vueLink:'https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events'
    },
    methods:{
        outputGoal(){
            const randomNumber= Math.random();
            if(randomNumber > 0.5){
                return this.courseGoalA;
            }else{
                 return this.courseGoalB;
            }
        }
    }

})