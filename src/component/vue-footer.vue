<template>
  <footer class="text-muted">
    <div class="container">
      <p class="float-right">
        <!-- <a href="#">Back to top</a> -->
      </p>
      <!-- <p>Website template used from &copy; Bootstrap</p> -->
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