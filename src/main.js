// Import Vue
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false; // Disables "Running in development mode." notification.

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss';

//Import formatted sorted table
import SortedTablePlugin from "vue-sorted-table";
Vue.use(SortedTablePlugin);

//import drodown feature
import Dropdown from 'bp-vuejs-dropdown';
Vue.use(Dropdown);
components: { Dropdown };

//creating routers to different pages
import router from './router/routes';
import { component } from 'vue/types/umd';

// Create the app and place inside the HTML structure.
new Vue({
  router,
  render: h => h(App)
  }).$mount('#app'); 