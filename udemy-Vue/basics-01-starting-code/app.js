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
        courseGoal: 'Finish the curse and learn Vue!'
    }

})