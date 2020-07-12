<template>
  <div id="component" class="Achilles">
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1>The builder parts</h1>
            <p class="lead text-muted">Something lovely about the collection</p>
            <img
              left
              src="../images/achilles.jpg"
              class="img-rounded"
              alt="achilles"
              width="100%"
              height="225"
              @click="$router.push('/home')"
            />
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <dropdown>
                <template slot="btn">Items</template>
                <template slot="body">
                  <ul>
                    <li>
                      <dropdown :trigger="hover" :role="sublist" :align="right">
                        <template slot="btn">Consumable Items</template>
                        <template slot="body">
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                id="bababrew"
                                value="Babas Brew"
                                v-model="ItemName"
                              />
                              <label for="bababrew">Baba's Brew</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="elixDefense"
                                value="Elixir of Defense"
                                v-model="ItemName"
                              />
                              <label for="elixDefense">Elixir of Defense</label>
                            </li>
                          </ul>
                        </template>
                      </dropdown>
                    </li>
                  </ul>
                </template>
              </dropdown>
              <div>
                <span>Items: {{ItemName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h1>Stats</h1>
            <template>
              <div id="app">
                <sorted-table :values="values">
                  <thead>
                    <tr>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="name">Name</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="health">Health</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="mana">Mana</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="baseAtkDamage">Basic Attack Damage</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="phyProtect">Physical Protection</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="hp5">HP5</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="mp5">MP5</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="atkSpeed">Attack Speeed</sort-link>
                      </th>
                      <th scope="col" style="text-align: left; width: 10rem;">
                        <sort-link name="moveSpeed">Movement Speed</sort-link>
                      </th>
                    </tr>
                  </thead>
                  <template #body="sort">
                    <tbody>
                      <tr v-for="value in sort.values" :key="value.name">
                        <td>{{ value.name }}</td>
                        <td>{{ value.health }}</td>
                        <td>{{ value.mana }}</td>
                        <td>{{ value.baseAtkDamage }}</td>
                        <td>{{ value.phyProtect }}</td>
                        <td>{{ value.hp5 }}</td>
                        <td>{{ value.mp5 }}</td>
                        <td>{{ value.atkSpeed }}</td>
                        <td>{{ value.moveSpeed }}</td>
                      </tr>
                      <!-- to do: sum -->
                    </tbody>
                  </template>
                </sorted-table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>
          New to Bootstrap?
          <a href="https://getbootstrap.com/">Visit the homepage.</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Dropdown from 'bp-vuejs-dropdown';
// import GodStats from '@/modules/godstats.js'

export default {
  name: "achilles",
  components: {
    Dropdown
  },
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
      values: [
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
        /* {
          name: "Elixir of Defense",
          health: +0,
          mana: +0,
          baseAtkDamage: +0,
          phyProtect: +50,
          hp5: +0,
          mp5: +0,
          atkSpeed: +0,
          moveSpeed: +0
        },
        {
          name: "Baba's Brew",
          health: +0,
          mana: +0,
          baseAtkDamage: +0,
          phyProtect: +0,
          hp5: +0,
          mp5: +0,
          atkSpeed: +0,
          moveSpeed: +0
        } */
      ]
    };
  }
};
</script>

<style lang="scss">
#app,
#component {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

header,
main,
footer {
  width: 100%;
}
</style>