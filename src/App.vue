<template>
    <div id="app">
        <NavigationTop></NavigationTop>
        <router-view></router-view>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
import NavigationTop from '@/component/navbar-top.vue';
import VueFooter from '@/component/vue-footer.vue';

export default {
    name: 'App',
    components: {
        NavigationTop,
        VueFooter
    },
    data() {
        return {
            msg: 'Welcome to the web app!'
        }
    }
}
</script>

<style lang="scss">
</style>