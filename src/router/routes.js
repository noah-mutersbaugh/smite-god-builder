import Vue from 'vue'
import Achilles from '../component/Achilles.vue';
import Agni from '../component/Agni.vue';
import Anhur from '../component/Anhur.vue';
import Amaterasu from '../component/Amaterasu.vue';
import Anubis from '../component/Anubis.vue';
import Aphrodite from '../component/Aphrodite.vue';
import Apollo from '../component/Apollo.vue';
import Arachne from '../component/Arachne.vue';
import Artemis from '../component/Artemis.vue';
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
    },
    {
        path: '/agni',
        name: 'Agni',
        component: Agni
    },
    {
        path: '/anhur',
        name: 'Anhur',
        component: Anhur
    },
    {
        path: '/amaterasu',
        name: 'Amaterasu',
        component: Amaterasu
    },
    {
        path: '/anubis',
        name: 'Anubis',
        component: Anubis
    },
    {
        path: '/aphrodite',
        name: 'Aphrodite',
        component: Aphrodite
    },
    {
        path: '/apollo',
        name: 'Apollo',
        component: Apollo
    },
    {
        path: '/arachne',
        name: 'Arachne',
        component: Arachne
    },
    {
        path: '/artemis',
        name: 'Artemis',
        component: Artemis
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
