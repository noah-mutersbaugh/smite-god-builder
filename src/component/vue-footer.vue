<template>
  <footer class="text-muted">
    <div class="container">
      <p class="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
      <p>
        New to Bootstrap?
        <a href="https://getbootstrap.com/">Visit the homepage.</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'vue-footer',
    data() {
        return {
            currentRoute: window.location.pathname
        }
    }
}
</script>