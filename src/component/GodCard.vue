<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="character-image">
        <img v-bind:src="'@/assets/images/' + this.name + '.jpg'" class=".img-thumbnail" alt="achilles" />
      </div>
      <div class="card-body">
        <p class="card-text">this.name</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="$router.push('/'+name)"
            >View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import { mapState } from 'vuex';
import store from '@/api/shop.js';

import json from '@/GodsJSON';

Vue.component('Card', {
  computed: mapState(['posts', 'loading', 'sessionID', 'godsJSONObject']),
  created() {
    // this.$store.dispatch('startLocalSession');
  },
  data() {
    myJSON: json
  }
});

export default Card;
</script>