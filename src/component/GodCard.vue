<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="character-image">
        <img v-bind:src="god.godIcon_URL" class=".img-thumbnail" alt="achilles" />
      </div>
      <div class="card-body">
        <p class="card-text">{{ god.Name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="$router.push('/god/'+ god.Name)"
            >View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "god-card",
  computed: {
    god() {
      return this.$attrs.god;
    },
  },
  data() {
    return {};
  },
};
</script>