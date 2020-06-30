// Import Vue
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false; // Disables "Running in development mode." notification.

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss';

// Create the app and place inside the HTML structure.
new Vue({
    render: h => h(App)
  }).$mount('#app');