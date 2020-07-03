// Import Vue
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false; // Disables "Running in development mode." notification.

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss';

//creating routers to different pages 
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({routes});

// Create the app and place inside the HTML structure.
new Vue({
    render: h => h(App),
    routes
  }).$mount('#app');