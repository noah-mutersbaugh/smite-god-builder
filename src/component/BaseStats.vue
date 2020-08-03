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
          <td>{{ calculateValue("Health") | roundedWhole }}</td>
          <td>{{ calculateValue("Mana") | roundedWhole }}</td>
          <td>{{ calculateValue("PhysicalPower") | roundedWhole }}</td>
          <td>{{ calculateValue("PhysicalProtection") | roundedWhole }}</td>
          <td>{{ calculateValue("MagicProtection") | roundedWhole }}</td>
          <td>{{ calculateValue("HealthPerFive") | roundedWhole }}</td>
          <td>{{ calculateValue("ManaPerFive") | roundedWhole }}</td>
          <td>{{ calculateValue("AttackSpeed") | roundedHundredth }}</td>
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

    <div>
      <select class="form-control" v-model="itemCategory">
        <option v-bind:value="null">Choose Category</option>
        <option
          v-bind:key="category"
          v-bind:value="category"
          v-for="(items, category) in getItems"
        >{{category}}</option>
      </select>
      <select class="form-control" v-if="itemCategory != null" v-model="itemToAdd">
        <option
          v-bind:key="item.id"
          v-bind:value="item"
          v-for="item in categoryItems"
        >{{item.DeviceName}}</option>
      </select>
      <button
        class="btn btn-primary"
        v-if="itemCategory != null"
        v-on:click="add"
        :disabled="itemsToApply.length == 6"
      >Add Item</button>
      <div>
        <div id="Build" :key="item.ItemId" v-for="item in itemsToApply">
          <div>{{item.DeviceName}}</div>
          <button class="btn btn-danger" v-on:click="remove(item.ItemId)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["god"],
  data() {
    return {
      level: 1,
      itemCategory: null,
      itemToAdd: null,
      itemsToApply: [],
      statsToApply: []
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
    add() {
      this.itemsToApply.push(this.itemToAdd);
    },
    remove(ID) {
      this.itemsToApply = this.itemsToApply.filter((item) => item.ItemId != ID);
    },
    setItem(item) {
      this.itemToAdd = item;
    },
    calculateValue(key) {
      let itemKey = key;
      if (key == "HealthPerFive") {
        itemKey = "HP5";
      } else if (key == "ManaPerFive") {
        itemKey = "MP5";
      } 

      let value = this.god[key];
      
      value += ((this.level-1) * this.god[itemKey+"PerLevel"]);
      this.itemsToApply.forEach(item => {
        item.ItemDescription.Menuitems.forEach(menuItem => {
          if (menuItem.Description == itemKey){
            if (menuItem.Description == 'Attack Speed'){
              value += parseInt(menuItem.Value, 10)/100;
            } else {
              value += parseInt(menuItem.Value, 10);
            }
          }
        });
      });
      
      return value;
    }
  },
  filters: {
    roundedHundredth(val) {
      return Math.round((val + Number.EPSILON) * 100) / 100;
    },
    roundedWhole(val) {
      return Math.round(val);
    },
  },
  computed: {
    categoryItems() {
      const currentIDs = this.itemsToApply.map((i) => i.ItemId);
      return this.getItems[this.itemCategory].filter(
        (item) => currentIDs.indexOf(item.ItemId) == -1
      );
    },
    ...mapGetters(["getItems"]),
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

#Build {
  display: flex;
  flex-flow: row-nowrap;
  justify-content: space-between;
}
</style>