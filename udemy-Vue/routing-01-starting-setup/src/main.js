import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect:'/teams'},
    /* alias vs redirect: Redirect: changes the URLAlias: just load the same component mentioned in the route */
    { path: '/teams', component: TeamsList, /*alias:'/' muestra este componente cuando la ruta sea /nothing*/ }, //our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true }, //Dynamic id. Everything after : is a param.. domain.com/teams/id => ORDER MATERS: if a route is not dynamic, this should be first called in the order, before the dynamic one/s 
    /*{props: true}. Tells to Vue Router that dynamic params should be passed into the component as PROPS, rather than just $route !!*/
     {path: '/:notFound(.*)', component: NotFound}

  ],
  // we can change the classes added to the link-router, using linkActive (or Exact) ActiveClass: 'put your class here (or overwrite it)
  linkActiveClass: 'active',
});

const app = createApp(App)
// app.use() allows us to use a 3rd party package
app.use(router);
app.mount('#app');
