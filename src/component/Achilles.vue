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
                            <dropdown: trigger="'hover'" :role="'sublist'" :align="'right'">
                                <template slot="btn">Consumable Items</template>
                                <template slot="body">
                                   <ul> 
                                        <li v-for="ConsumeItem in ['Babas Brew', 2, 3, 4, 5]" v-bind:key="ConsumeItem.id">
                                            <label>
                                                <input type="checkbox">item {{ i }}
                                            </label>
                                        </li>
                                    </ul>
                                </template>
                            </dropdown:>
                        </li>
                    </ul>
                </template>
                </dropdown>
              <div class="d-flex justify-content-between align-items-center">
                <b-img v-bind="mainProps" blank-color="gray" alt="Named color image (gray)"></b-img>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h1>Stats section</h1>
            <blockquote
              class="blockquote"
            >working on 3 tables: offense, defense and utility updatable by the items selected throught the dropdown menu.</blockquote>
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
      mainProps: { blank: true, width: 75, height: 75, class: "m1" }
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