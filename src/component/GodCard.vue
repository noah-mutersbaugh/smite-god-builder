<template>
  <div class="col-md-3">
    <div class="card mb-4 shadow-sm">
      <div class="character-image">
        <img v-bind:src="god.godIcon_URL" class=".img-thumbnail" alt="achilles" />
      </div>
      <div class="col card-body">
        <p class="card-text">{{ god.Name }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group align-items-center">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="$router.push('/god/'+ god.id)"
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
  props: ['god'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex !important;
  flex-flow: column nowrap !important;
  align-items: center !important;
  .card-text {
    text-align: center;
  }
}
</style>