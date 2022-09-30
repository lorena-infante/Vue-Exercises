import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, //our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true }, //Dynamic id. Everything after : is a param.. domain.com/teams/id => ORDER MATERS: if a route is not dynamic, this should be first called in the order, before the dynamic one/s 
    /*{props: true}. Tells to Vue Router that dynamic params should be passed into the component as PROPS, rather than just $route !!*/

  ],
  // we can change the classes added to the link-router, using linkActive (or Exact) ActiveClass: 'put your class here (or overwrite it)
  linkActiveClass: 'active',
});

const app = createApp(App)
// app.use() allows us to use a 3rd party package
app.use(router);
app.mount('#app');
