<template>
    <div id="app">
        <NavigationTop></NavigationTop>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationTop from '@/component/navbar-top.vue'

export default {
    name: 'App',
    components: {
        NavigationTop
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