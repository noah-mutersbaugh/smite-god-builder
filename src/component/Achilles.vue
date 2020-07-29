<template>
  <div id="component" class="achilles">
    <main role="main">
      <div class="container">
        <div class="row" id="top-row">
          <div class="col">
            <h1 class="text-center">The builder parts</h1>
            <p class="lead text-muted"></p>
            <div class="character-image">
              <img
                src="@/assets/images/achilles.jpg"
                class="img-rounded"
                alt="achilles"
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
                        <template slot="btn">Passive Items</template>
                        <template slot="body">
                          <ul>
                            <li>
                              <Dropdown>
                                <template slot="btn">Tier I</template>
                                <template slot="body">
                                  <ul>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="boots"
                                        value="Boots"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="boots">Boots</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="cudgel"
                                        value="Cudgel"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="cudgel">Cudgel</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="gemfate"
                                        value="Gem of Fate"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="gemfate">Gem of Fate</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="glowemrld"
                                        value="Glowing Emerald"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="glowemrld">Glowing Emerald</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="katana"
                                        value="Katana"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="katana">Katana</label>
                                    </li>
                                  </ul>
                                </template>
                              </Dropdown>
                            </li>
                            <li>
                              <Dropdown>
                                <template slot="btn">Tier II</template>
                                <template slot="body">
                                  <ul>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="booksouls"
                                        value="Book of Souls"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="booksouls">Book of Souls</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="clericclk"
                                        value="Cleric's Cloak"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="clericclk">Cleric's Cloak</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="heavyhmr"
                                        value="Heavy Hammer"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="heavyhmr">Heavy Hammer</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="sagestn"
                                        value="Sage's Stone"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="sagestn">Sage's Stone</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="splfocus"
                                        value="Spell Focus"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="splfocus">Spell Focus</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="stlmail"
                                        value="Steel Mail"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="stlmail">Steel Mail</label>
                                    </li>
                                  </ul>
                                </template>
                              </Dropdown>
                            </li>
                            <li>
                              <Dropdown>
                                <template slot="btn">Tier III</template>
                                <template slot="body">
                                  <ul>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="bookthoth"
                                        value="Book of Thoth"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="bookthoth">Book of Thoth</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="doomorb"
                                        value="Doom Orb"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="doomorb">Doom Orb</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="gauntthebes"
                                        value="Gauntlet of Thebes"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="gauntthebes">Gauntlet of Thebes</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="heartsk"
                                        value="Heartseeker"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="heartsk">Heartseeker</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="hideofur"
                                        value="Hide of the Urchin"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="hideofur">Hide of the Urchin</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="hydral"
                                        value="Hydra's Lament"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="hydral">Hydra's Lament</label>
                                    </li>
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
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="midmail"
                                        value="Midgardian Mail"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="midmail">Midgardian Mail</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="mailrn"
                                        value="Mail of Renewal"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="mailrn">Mail of Renewal</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="polynom"
                                        value="Polynomicon"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="polynom">Polynomicon</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="magus"
                                        value="Spear of the Magus"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="magus">Spear of the Magus</label>
                                    </li>
                                    <li>
                                      <input
                                        type="checkbox"
                                        id="warstaff"
                                        value="Warlock's Staff"
                                        v-model="ItemNames"
                                        @change="addItem()"
                                      />
                                      <label for="warstaff">Warlock's Staff</label>
                                    </li>
                                  </ul>
                                </template>
                              </Dropdown>
                            </li>
                          </ul>
                        </template>
                      </Dropdown>
                    </li>
                    <li>
                      <Dropdown>
                        <template slot="btn">Relics</template>
                        <template slot="body">
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                id="heavenwings"
                                value="Heavenly Wings"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="heavenwings">Heavenly Wings</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="horremb"
                                value="Horrific Emblem"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="horremb">Horrific Emblem</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="medcloak"
                                value="Medication Cloak"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="medcloak">Medication Cloak</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="purificbds"
                                value="Purification Beads"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="purificbds">Purification Beads</label>
                            </li>
                          </ul> 
                        </template>
                      </Dropdown>
                    </li>
                    <li>
                      <Dropdown>
                        <template slot="btn">Consumable Items</template>
                        <template slot="body">
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                id="elixpow"
                                value="Elixir of Power"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="elixpow">Elixir of Power</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="healpot"
                                value="Healing Potion"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="healpot">Healing Potion</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="manapot"
                                value="Mana Potion"
                                v-model="ItemNames"
                                @change="addItem()"
                              />
                              <label for="manapot">Mana Potion</label>
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
  name: "achilles",
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
      //will leave this part alone for now, incase it interfears with upcoming plans
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
