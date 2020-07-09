import Vue from 'vue'
import Achilles from '../component/Achilles.vue';
import Home from '../component/home.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/achilles',
        name: 'Achilles',
        component: Achilles
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;