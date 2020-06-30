<template>
    <div class="hello">
    <h1>{{ msg }} </h1>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            msg: 'Welcome to the web app!'
        }
    }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: 25% 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  font-size: 3vh;
}
</style>