import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './app.routes.config';
import App from './App.vue';
import './assets/css/index.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
