import Vue from 'vue'
import Home from '../views/home.vue';
import God from '../views/GodDetails.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/god/:name',
        name: 'God',
        component: God
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
