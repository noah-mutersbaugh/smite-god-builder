<template>
  <div id="component" class="achilles">
    <main role="main">
      <div class="container">
        <div class="row" id="top-row">
          <div class="col">
            <h1 class="text-center">The builder parts</h1>
            <p class="lead text-muted"></p>
            <div class="character-image">
              <!-- <img
                :src="getImageURL(god.selection)"
                :alt="god.selection"
                class="img-rounded"
                @click="$router.push('/')"
              /> -->
            </div>
          </div>
        </div>

        <BaseStats
          :name="statistics[0].name"
          :health="statistics[0].health"
          :mana="statistics[0].mana"
          :baseAtkDamage="statistics[0].baseAtkDamage"
          :phyProtect="statistics[0].phyProtect"
          :hp5="statistics[0].hp5"
          :mp5="statistics[0].mp5"
          :atkSpeed="statistics[0].atkSpeed"
          :moveSpeed="statistics[0].moveSpeed"
        />

        <div class="input-group w-25 mb-3">
          <div class="input-group-prepend">
            <button
              v-on:click="decrease()"
              class="btn btn-outline-secondary"
              type="button"
              id="decrease"
            >-</button>
          </div>
          <input
            class="quantity"
            min="0"
            max="20"
            name="quantity"
            value="1"
            type="number"
            id="number"
          />
          <div class="input-group-append">
            <button
              v-on:click="increase()"
              class="btn btn-outline-secondary"
              type="button"
              id="increase"
            >+</button>
          </div>
        </div>

        <div id="APITest">
          <button v-on:click="getGods()">Test</button>
        </div>

        <h1> {{ sessionID }} </h1>
      </div>
    </main>
  </div>
</template>

<script>
// import Vue from 'vue';
import BaseStats from "@/component/BaseStats.vue";
import { mapState } from "vuex";
import store from "@/api/shop.js";

export default {
  name: "god",
  store,
  components: {
    BaseStats,
    // LevelChange
  },
  data() {
    return {
      statistics: [
        {
          name: "Base",
          health: 547,
          mana: 240,
          baseAtkDamage: 40,
          phyProtect: 20,
          hp5: 9.75,
          mp5: 5.09,
          atkSpeed: 0.96,
          moveSpeed: 370,
        },
      ],
      ItemNames: [],
      // god: {
      //   selection: "achilles",
      // },
      // json: {
      //   info: this.$store.data.json
      // }
    };
  },
  methods: {
    getImageURL(selection) {
      var images = require.context("@/assets/images/", false, /\.jpg$/);
      return images("./" + selection + ".jpg");
    },
    getGods() {
      
    }
  },
  computed: mapState(['posts', 'loading', 'sessionID', 'godsJSONObject']),
  created() {
    //this.$store.dispatch('startSession');
    // this.$store.dispatch('startLocalSession');
  }
};
</script>

<style scoped>
.row {
  padding-bottom: 3rem;
}

#item-row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

#top-row {
  width: 100%;
}
</style>
