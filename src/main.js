// Import Vue
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false; // Disables "Running in development mode." notification.



// Import bootstrap
import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.scss';

// //Import formatted sorted table
// import SortedTablePlugin from "vue-sorted-table";
// Vue.use(SortedTablePlugin);

//creating routers to different pages
import router from './router/routes';

import store from '@/api/shop.js';

// Create the app and place inside the HTML structure.
new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app'); 