<template>
  <div id="component" class="Anhur">
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1>The builder parts</h1>
          <p class="lead text-muted">Something lovely about the collection</p>
          <p>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="$router.push('/')"
            >Back to home</button>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "anhur",
  data() {
    return {
      msg: "Welcome to the web app!"
    };
  }
};
</script>

<style lang="scss">
</style>
