<template>
  <div id="component" class="Achilles">
    <!-- Custom styles for this template -->
    <link href="assets/album.css" rel="stylesheet" />

    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks can pick up some
                informative tidbits. Then, link them off to some social networking sites or contact
                information.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">Follow on Twitter</a>
                </li>
                <li>
                  <a href="#" class="text-white">Like on Facebook</a>
                </li>
                <li>
                  <a href="#" class="text-white">Email me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              aria-hidden="true"
              class="mr-2"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path
                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
              />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>Smite God Builder</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>

    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1>The builder parts</h1>
            <p class="lead text-muted">Something lovely about the collection</p>
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary" @click="$router.push('/')">Back to home</button> -->
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
                      <dropdown : trigger="hover" :role="sublist" :align="right">
                      <template
                        slot="btn"
                      >Consumable Items</template>
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
                      <tr v-for="values in sort.values" :key="values.name">
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
export default {
  name: "achilles",
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
        },
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