import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect:'/teams'},
    /* alias vs redirect: Redirect: changes the URLAlias: just load the same component mentioned in the route */
    { name:'teams',
      path: '/teams', 
      meta:{ needsAuth:true },
      /*we can use more than one router*/
      components: { 
        default: TeamsList, 
        footer: TeamsFooter,
      },
      children: [
        { name:'team-members',path: '/teams/:teamId', component: TeamMembers, props: true }
      ] 
    }, //our-domain.com/teams => TeamsList, alias:'/' muestra este componente cuando la ruta sea /nothing
    { 
      path: '/users', 
      components:{
        default: UsersList,
        footer: UsersFooter, 
      },
      // if we want to redirect in a single component we can call the method here too
      beforeEnter(to, from, next){
        console.log('Users beforeEnter');
        console.log(to, from);
        next();
      } 
    },
    { path: '/:notFound(.*)', component: NotFound}

  ],
  // we can change the classes added to the link-router, using linkActive (or Exact) ActiveClass: 'put your class here (or overwrite it)
  linkActiveClass: 'active',
  //scroll behaviour allows aus to scroll to a specific position
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition){
      return savedPosition;
    }
    return { left:0, top:0 }
  }
});
//this function will be called before we execute any navigation action (change page, press back arrow into the browser,etc)
// execution order:

// 1. global

// 2. router

// 3. component
//next will confirm or cancel the navigation action
router.beforeEach( function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if(to.meta.needsAuth){
    console.log('Needs auth!');
    next();
  }else {
    next();
  }
  //next() allows the navigation
  //next(false) doesn't allow the navigation
  //next('/teams') //accepts the route we wanna navigate to
  // always check before calling the next();
  // if(to.name === 'team-members'){
  //   next();  
  // }
  // else{
  //   next ({name: 'team-members', params: { teamId: 't2'}});
  // }
  next();
});

router.afterEach(function (to,from) {
  //sending analytis data, for example
  console.log('Global AfterEach');
  console.log(to, from);
});
const app = createApp(App)
// app.use() allows us to use a 3rd party package
app.use(router);
app.mount('#app');
