import Vue from 'vue'
import Home from '../component/home.vue';
import God from '../component/god.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/god',
        name: 'God',
        component: God
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
