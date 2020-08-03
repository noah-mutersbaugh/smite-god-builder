<template>
  <div id="component" class="achilles">
    <main role="main">
      <div class="container">
        <div class="row" id="top-row">
          <div class="col">
            <h1 class="text-center">The builder parts</h1>
            <p class="lead text-muted"></p>
            <div class="character-image">
              <img v-bind:src="god.godIcon_URL" class=".img-thumbnail" />
            </div>
          </div>
        </div>

        <BaseStats v-bind:god="god"></BaseStats>

        <Items></Items>
      </div>
    </main>
  </div>
</template>

<script>
// import Vue from 'vue';
import BaseStats from "@/component/BaseStats.vue";
import Items from "@/component/Items.vue";
import { mapGetters } from "vuex";

export default {
  name: "GodDetails",
  components: {
    BaseStats,
    Items
  },
  data() {
    return {
      ItemNames: [],
    };
  },
  methods: {},
  computed: {
    god() {
      return this.getGods.find((god) => god.id == this.$route.params.id);
    },
    item() {
      return this.getItems.find((item) => item.id)
    },
    ...mapGetters(["getGods", "getItems"]),
  },
  created() {
    //this.$store.dispatch('startSession');
    this.$store.dispatch("startLocalSession");
  },
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
