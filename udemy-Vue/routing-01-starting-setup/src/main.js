import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js'



const app = createApp(App)
// app.use() allows us to use a 3rd party package
app.use(router);
app.mount('#app');
