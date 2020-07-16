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
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Achilles.jpg" class=".img-thumbnail" alt="Achilles" />
                </div>
                <div class="card-body">
                  <p class="card-text">Achilles</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Achilles')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Agni.jpg" class=".img-thumbnail" alt="Agni" />
                </div>
                <div class="card-body">
                  <p class="card-text">Agni</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Agni')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Amaterasu.jpg" class=".img-thumbnail" alt="Amaterasu" />
                </div>
                <div class="card-body">
                  <p class="card-text">Amaterasu</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Amaterasu')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Anhur.jpg" class=".img-thumbnail" alt="Anhur" />
                </div>
                <div class="card-body">
                  <p class="card-text">Anhur</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Anhur')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Anubis.jpg" class=".img-thumbnail" alt="Anubis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Anubis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Anubis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Aphrodite.jpg" class=".img-thumbnail" alt="Aphrodite" />
                </div>
                <div class="card-body">
                  <p class="card-text">Aphrodite</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Aphrodite')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Apollo.jpg" class=".img-thumbnail" alt="Apollo" />
                </div>
                <div class="card-body">
                  <p class="card-text">Apollo</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Apollo')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Arachne.jpg" class=".img-thumbnail" alt="Arachne" />
                </div>
                <div class="card-body">
                  <p class="card-text">Arachne</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Arachne')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/Artemis.jpg" class=".img-thumbnail" alt="Artemis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Artemis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Artemis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
