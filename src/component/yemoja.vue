<template>
  <div id="component" class="yemoja">
    <main role="main">
      <div class="container">
        <div class="row" id="top-row">
          <div class="col">
            <h1 class="text-center">The builder parts</h1>
            <p class="lead text-muted"></p>
            <div class="character-image">
              <img
                src="@/assets/images/yemoja.jpg"
                class="img-rounded"
                alt="yemoja"
                @click="$router.push('/')"
              />
            </div>
          </div>

          <div class="col">
            <div class="card mb-4 shadow-sm" id="item-row">
              <dropdown>
                <template slot="btn">Items</template>
                <template slot="body">
                  <ul>
                    <li>
                      <Dropdown>
                        <template slot="btn">Consumable Items</template>
                        <template slot="body">
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                id="jotunns"
                                value="Jotunn's Wrath"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="jotunns">Jotunn's Wrath</label>
                            </li>
                          </ul>
                        </template>
                      </Dropdown>
                    </li>
                  </ul>
                </template>
              </dropdown>
              <div>
                <span>Items: {{ ItemNames }}</span>
              </div>
            </div>
          </div>
        </div>

        <Statistics
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
          <input class="quantity" min="0" max="20" name="quantity" value="1" type="number" id="number" />
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
    </main>
  </div>
</template>

<script>
import Dropdown from "bp-vuejs-dropdown";
import Statistics from "@/component/BaseStats.vue";
// import LevelChange from "@/component/LevelChange.vue";

export default {
  name: "yemoja",
  components: {
    Dropdown,
    Statistics
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
          moveSpeed: 370
        }
      ],
      ItemNames: []
    };
  },
  methods: {
    addItem() {
      var checkBox = document.getElementById("jotunns");
      if (checkBox.checked == true) {
        this.statistics[0].baseAtkDamage += 40;
        this.statistics[0].mana += 150;
      } else {
        this.statistics[0].baseAtkDamage -= 40;
        this.statistics[0].mana -= 150;
      }
    },
    increase: function() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;

      if (value < 20) {
        value++;
        document.getElementById("number").value = value;
        this.statistics[0].health += 85;
        this.statistics[0].mana += 35;
        this.statistics[0].baseAtkDamage += 2;
        this.statistics[0].phyProtect += 3;
        this.statistics[0].hp5 += 1;
        this.statistics[0].mp5 += 1;
        this.statistics[0].atkSpeed += 0.01;
        this.statistics[0].moveSpeed += 0;
      }
    },
    decrease: function() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;

      if (value > 1) {
        value--;
        document.getElementById("number").value = value;
        this.statistics[0].health -= 85;
        this.statistics[0].mana -= 35;
        this.statistics[0].baseAtkDamage -= 2;
        this.statistics[0].phyProtect -= 3;
        this.statistics[0].hp5 -= 1;
        this.statistics[0].mp5 -= 1;
        this.statistics[0].atkSpeed -= 0.01;
        this.statistics[0].moveSpeed -= 0;
      }
    }
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
