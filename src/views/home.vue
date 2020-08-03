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
            <!-- <div class="GodCardsList"> go through each god in the json -->
              <GodCard class="col" v-for="god in getGods" v-bind:key="god.id" v-bind:god="god"></GodCard>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GodCard from '@/component/GodCard.vue';
import { mapGetters } from 'vuex';


export default {
  components: {
    GodCard
  },
  computed: {
    ...mapGetters([
      'getGods'
    ])
  },
  created() {
    this.$store.dispatch('startLocalSession');
  },
  data() {
    return {
      
    };
  },
};
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

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1340px;
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 1540px;
  }
}

@media (min-width: 1800px) {
  .container {
    max-width: 1740px;
  }
}

@media (min-width: 2000px) {
  .container {
    max-width: 1940px;
  }
}
</style>
