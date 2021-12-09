/* //vanilla JS
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

//Evt listener
buttonEl.addEventListener('click', addGoal);

//functions
function addGoal (){
    let inputVal = inputEl.value;
    let newGoalLi = document.createElement('li');
    newGoalLi.textContent = inputVal;
    listEl.appendChild(newGoalLi);
    inputEl.value = '';
}  */
//vue
const app = new Vue({
 el: "#app",
 data: {
  goals: [],
  enteredValue: "",
 },
 methods: {
  addGoal() {
   this.goals.push(this.enteredValue);
   this.enteredValue = "";
  },
 },
});
