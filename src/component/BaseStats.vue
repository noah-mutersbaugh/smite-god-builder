<template>
  <div class="row">
    <h1>Stats</h1>
    <table class="table text-center" id="statsTable">
      <thead>
        <tr>
          <th scope="col">Health</th>
          <th scope="col">Mana</th>
          <th scope="col">Physical Power</th>
          <th scope="col">Physical Protections</th>
          <th scope="col">Magical Protections</th>
          <th scope="col">HP5</th>
          <th scope="col">MP5</th>
          <th scope="col">Attack Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ (god.Health + (level * god.HealthPerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.Mana + (level * god.ManaPerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.PhysicalPower + (level * god.PhysicalPowerPerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.PhysicalProtection + (level * god.PhysicalProtectionPerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.MagicProtection + (level * god.MagicProtectionPerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.HealthPerFive + (level * god.HP5PerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.ManaPerFive + (level * god.MP5PerLevel) ) | roundedWhole }}</td>
          <td>{{ (god.AttackSpeed + (level * god.AttackSpeedPerLevel) ) | roundedHundredth }}</td>
        </tr>
      </tbody>
    </table>
    <div id="LevelChange">
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
          min="1"
          max="20"
          name="quantity"
          v-model="level"
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["god"],
  computed: {},
  data() {
    return {
      level: 1,
    };
  },
  methods: {
    increase() {
      if (this.level < 20) this.level++;
    },
    decrease() {
      if (this.level > 1) {
        this.level--;
      }
    },
  },
  filters: {
    roundedHundredth(val) {
      return Math.round((val + Number.EPSILON) * 100) / 100;
    },
    roundedWhole(val) {
      return Math.round(val);
    },
  },
};
</script>

<style scoped lang="scss">
th {
  width: 10rem;
}

#LevelChange {
  margin: 0 auto;
  
  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
}
</style>