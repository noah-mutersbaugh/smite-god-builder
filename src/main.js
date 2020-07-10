// Import Vue
import Vue from 'vue';
import App from './App.vue';
import Dropdown from 'bp-vuejs-dropdown';

Vue.config.productionTip = false; // Disables "Running in development mode." notification.

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss';

//creating routers to different pages
import router from './router/routes';
import { component } from 'vue/types/umd';

//for dropdown
Vue.use(Dropdown)
components: { Dropdown }

// Create the app and place inside the HTML structure.
new Vue({
  router,
  render: h => h(App)
  }).$mount('#app'); 