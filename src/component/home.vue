<template>
  <div class="Home">
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1>Smite God</h1>
          <p class="lead text-muted">Go ahead and choose your character!</p>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <GodCard
            v-for="god in gods"
            v-bind:key="god.Name"
            v-bind:god="god"></GodCard>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron h1 {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

.vue-footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.vue-footer p {
  margin-bottom: 0.25rem;
}

#app {
  width: 0;
}
</style>
