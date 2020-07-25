<template>
  <div class="Home">
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1>Smite God</h1>
          <p class="lead text-muted">Go ahead and choose your character!</p>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/achilles.jpg" class=".img-thumbnail" alt="achilles" />
                </div>
                <div class="card-body">
                  <p class="card-text">Achilles</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/achilles')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/agni.jpg" class=".img-thumbnail" alt="agni" />
                </div>
                <div class="card-body">
                  <p class="card-text">Agni</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/agni')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ah-muzen-cab.jpg" class=".img-thumbnail" alt="ah-muzen-cab" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ah-muzen-cab</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ah-muzen-cab')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ah-puch.jpg" class=".img-thumbnail" alt="ah-puch" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ah-puch</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ah-puch')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/amaterasu.jpg" class=".img-thumbnail" alt="amaterasu" />
                </div>
                <div class="card-body">
                  <p class="card-text">Amaterasu</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/amaterasu')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/anhur.jpg" class=".img-thumbnail" alt="anhur" />
                </div>
                <div class="card-body">
                  <p class="card-text">Anhur</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/anhur')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/anubis.jpg" class=".img-thumbnail" alt="anubis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Anubis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/anubis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ao-kuang.jpg" class=".img-thumbnail" alt="ao-kuang" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ao-kuang</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ao-kuang')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/aphrodite.jpg" class=".img-thumbnail" alt="aphrodite" />
                </div>
                <div class="card-body">
                  <p class="card-text">Aphrodite</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/aphrodite')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/apollo.jpg" class=".img-thumbnail" alt="apollo" />
                </div>
                <div class="card-body">
                  <p class="card-text">Apollo</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/apollo')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/arachne.jpg" class=".img-thumbnail" alt="arachne" />
                </div>
                <div class="card-body">
                  <p class="card-text">Arachne</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/arachne')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ares.jpg" class=".img-thumbnail" alt="ares" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ares</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ares')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/artemis.jpg" class=".img-thumbnail" alt="artemis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Artemis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/artemis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/athena.jpg" class=".img-thumbnail" alt="athena" />
                </div>
                <div class="card-body">
                  <p class="card-text">Athena</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/athena')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/awilix.jpg" class=".img-thumbnail" alt="awilix" />
                </div>
                <div class="card-body">
                  <p class="card-text">Awilix</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/awilix')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/baba-yaga.jpg" class=".img-thumbnail" alt="baba-yaga" />
                </div>
                <div class="card-body">
                  <p class="card-text">Baba-yaga</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/baba-yaga')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/bacchus.jpg" class=".img-thumbnail" alt="bacchus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Bacchus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/Bacchus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/bakasura.jpg" class=".img-thumbnail" alt="bakasura" />
                </div>
                <div class="card-body">
                  <p class="card-text">Bakasura</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/bakasura')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/baron-samedi.jpg" class=".img-thumbnail" alt="baron-samedi" />
                </div>
                <div class="card-body">
                  <p class="card-text">Baron-samedi</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/baron-samedi')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/bastet.jpg" class=".img-thumbnail" alt="bastet" />
                </div>
                <div class="card-body">
                  <p class="card-text">Bastet</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/bastet')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/bellona.jpg" class=".img-thumbnail" alt="bellona" />
                </div>
                <div class="card-body">
                  <p class="card-text">Bellona</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/bellona')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cabrakan.jpg" class=".img-thumbnail" alt="cabrakan" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cabrakan</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cabrakan')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/camazotz.jpg" class=".img-thumbnail" alt="camazotz" />
                </div>
                <div class="card-body">
                  <p class="card-text">Camazotz</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/camazotz')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cerberus.jpg" class=".img-thumbnail" alt="cerberus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cerberus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cerberus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cernunnos.jpg" class=".img-thumbnail" alt="cernunnos" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cernunnos</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cernunnos')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/chaac.jpg" class=".img-thumbnail" alt="chaac" />
                </div>
                <div class="card-body">
                  <p class="card-text">Chaac</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/chaac')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/chang-e.jpg" class=".img-thumbnail" alt="chang-e" />
                </div>
                <div class="card-body">
                  <p class="card-text">Chang-e</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/chang-e')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/chernobog.jpg" class=".img-thumbnail" alt="chernobog" />
                </div>
                <div class="card-body">
                  <p class="card-text">Chernobog</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/chernobog')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/chiron.jpg" class=".img-thumbnail" alt="chiron" />
                </div>
                <div class="card-body">
                  <p class="card-text">Chiron</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/chiron')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/chronos.jpg" class=".img-thumbnail" alt="chronos" />
                </div>
                <div class="card-body">
                  <p class="card-text">Chronos</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/chronos')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cthulhu.jpg" class=".img-thumbnail" alt="cthulhu" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cthulhu</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cthulhu')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cu-chulainn.jpg" class=".img-thumbnail" alt="cu-chulainn" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cu-chulainn</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cu-chulainn')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/cupid.jpg" class=".img-thumbnail" alt="cupid" />
                </div>
                <div class="card-body">
                  <p class="card-text">Cupid</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/cupid')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/da-ji.jpg" class=".img-thumbnail" alt="da-ji" />
                </div>
                <div class="card-body">
                  <p class="card-text">Da-ji</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/da-ji')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/discordia.jpg" class=".img-thumbnail" alt="discordia" />
                </div>
                <div class="card-body">
                  <p class="card-text">Discordia</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/discordia')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/erlang-shen.jpg" class=".img-thumbnail" alt="erlang-shen" />
                </div>
                <div class="card-body">
                  <p class="card-text">Erlang-shen</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/erlang-shen')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/fafnir.jpg" class=".img-thumbnail" alt="fafnir" />
                </div>
                <div class="card-body">
                  <p class="card-text">Fafnir</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/fafnir')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/fenrir.jpg" class=".img-thumbnail" alt="fenrir" />
                </div>
                <div class="card-body">
                  <p class="card-text">Fenrir</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/fenrir')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/freya.jpg" class=".img-thumbnail" alt="freya" />
                </div>
                <div class="card-body">
                  <p class="card-text">Freya</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/freya')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ganesha.jpg" class=".img-thumbnail" alt="ganesha" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ganesha</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ganesha')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/geb.jpg" class=".img-thumbnail" alt="geb" />
                </div>
                <div class="card-body">
                  <p class="card-text">Geb</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/geb')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/guan-yu.jpg" class=".img-thumbnail" alt="guan-yu" />
                </div>
                <div class="card-body">
                  <p class="card-text">Guan-yu</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/guan-yu')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hachiman.jpg" class=".img-thumbnail" alt="hachiman" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hachiman</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hachiman')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hades.jpg" class=".img-thumbnail" alt="hades" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hades</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hades')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/he-bo.jpg" class=".img-thumbnail" alt="he-bo" />
                </div>
                <div class="card-body">
                  <p class="card-text">He-bo</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/he-bo')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/heimdallr.jpg" class=".img-thumbnail" alt="heimdallr" />
                </div>
                <div class="card-body">
                  <p class="card-text">Heimdallr</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/heimdallr')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hel.jpg" class=".img-thumbnail" alt="hel" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hel</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hel')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hercules.jpg" class=".img-thumbnail" alt="hercules" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hercules</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hercules')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/horus.jpg" class=".img-thumbnail" alt="horus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Horus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/horus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hou-yi.jpg" class=".img-thumbnail" alt="hou-yi" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hou-yi</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hou-yi')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/hun-batz.jpg" class=".img-thumbnail" alt="hun-batz" />
                </div>
                <div class="card-body">
                  <p class="card-text">Hun-batz</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/hun-batz')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/isis.jpg" class=".img-thumbnail" alt="isis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Isis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/isis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/izanami.jpg" class=".img-thumbnail" alt="izanami" />
                </div>
                <div class="card-body">
                  <p class="card-text">Izanami</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/izanami')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/janus.jpg" class=".img-thumbnail" alt="janus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Janus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/janus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/jing-wei.jpg" class=".img-thumbnail" alt="jing-wei" />
                </div>
                <div class="card-body">
                  <p class="card-text">Jing-wei</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/jing-wei')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/jormungandr.jpg" class=".img-thumbnail" alt="jormungandr" />
                </div>
                <div class="card-body">
                  <p class="card-text">Jormungandr</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/jormungandr')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/kali.jpg" class=".img-thumbnail" alt="kali" />
                </div>
                <div class="card-body">
                  <p class="card-text">Kali</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/kali')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/khepri.jpg" class=".img-thumbnail" alt="khepri" />
                </div>
                <div class="card-body">
                  <p class="card-text">Khepri</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/khepri')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/king-arthur.jpg" class=".img-thumbnail" alt="king-arthur" />
                </div>
                <div class="card-body">
                  <p class="card-text">King-arthur</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/king-arthur')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/kukulkan.jpg" class=".img-thumbnail" alt="kukulkan" />
                </div>
                <div class="card-body">
                  <p class="card-text">Kukulkan</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/kukulkan')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/kumbhakarna.jpg" class=".img-thumbnail" alt="kumbhakarna" />
                </div>
                <div class="card-body">
                  <p class="card-text">Kumbhakarna</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/kumbhakarna')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/kuzenbo.jpg" class=".img-thumbnail" alt="kuzenbo" />
                </div>
                <div class="card-body">
                  <p class="card-text">Kuzenbo</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/kuzenbo')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/loki.jpg" class=".img-thumbnail" alt="loki" />
                </div>
                <div class="card-body">
                  <p class="card-text">Loki</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/loki')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/medusa.jpg" class=".img-thumbnail" alt="medusa" />
                </div>
                <div class="card-body">
                  <p class="card-text">Medusa</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/medusa')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/mercury.jpg" class=".img-thumbnail" alt="mercury" />
                </div>
                <div class="card-body">
                  <p class="card-text">Mercury</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/mercury')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/merlin.jpg" class=".img-thumbnail" alt="merlin" />
                </div>
                <div class="card-body">
                  <p class="card-text">Merlin</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/merlin')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/mulan.jpg" class=".img-thumbnail" alt="mulan" />
                </div>
                <div class="card-body">
                  <p class="card-text">Mulan</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/mulan')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ne-zha.jpg" class=".img-thumbnail" alt="ne-zha" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ne-zha</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ne-zha')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/neith.jpg" class=".img-thumbnail" alt="neith" />
                </div>
                <div class="card-body">
                  <p class="card-text">Neith</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/neith')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/nemesis.jpg" class=".img-thumbnail" alt="nemesis" />
                </div>
                <div class="card-body">
                  <p class="card-text">Nemesis</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/nemesis')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/nike.jpg" class=".img-thumbnail" alt="nike" />
                </div>
                <div class="card-body">
                  <p class="card-text">Nike</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/nike')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/nox.jpg" class=".img-thumbnail" alt="nox" />
                </div>
                <div class="card-body">
                  <p class="card-text">Nox</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/nox')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/nu-wa.jpg" class=".img-thumbnail" alt="nu-wa" />
                </div>
                <div class="card-body">
                  <p class="card-text">Nu-wa</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/nu-wa')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/odin.jpg" class=".img-thumbnail" alt="odin" />
                </div>
                <div class="card-body">
                  <p class="card-text">Odin</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/odin')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/olorun.jpg" class=".img-thumbnail" alt="olorun" />
                </div>
                <div class="card-body">
                  <p class="card-text">Olorun</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/olorun')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/osiris.jpg" class=".img-thumbnail" alt="osiris" />
                </div>
                <div class="card-body">
                  <p class="card-text">Osiris</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/osiris')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/pele.jpg" class=".img-thumbnail" alt="pele" />
                </div>
                <div class="card-body">
                  <p class="card-text">Pele</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/pele')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/persephone.jpg" class=".img-thumbnail" alt="persephone" />
                </div>
                <div class="card-body">
                  <p class="card-text">Persephone</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/persephone')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/poseidon.jpg" class=".img-thumbnail" alt="poseidon" />
                </div>
                <div class="card-body">
                  <p class="card-text">Poseidon</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/poseidon')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ra.jpg" class=".img-thumbnail" alt="ra" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ra</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ra')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/raijin.jpg" class=".img-thumbnail" alt="raijin" />
                </div>
                <div class="card-body">
                  <p class="card-text">Raijin</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/raijin')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/rama.jpg" class=".img-thumbnail" alt="rama" />
                </div>
                <div class="card-body">
                  <p class="card-text">Rama</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/rama')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ratatoskr.jpg" class=".img-thumbnail" alt="ratatoskr" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ratatoskr</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ratatoskr')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ravana.jpg" class=".img-thumbnail" alt="ravana" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ravana</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ravana')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/scylla.jpg" class=".img-thumbnail" alt="scylla" />
                </div>
                <div class="card-body">
                  <p class="card-text">Scylla</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/scylla')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/serqet.jpg" class=".img-thumbnail" alt="serqet" />
                </div>
                <div class="card-body">
                  <p class="card-text">Serqet</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/serqet')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/set.jpg" class=".img-thumbnail" alt="set" />
                </div>
                <div class="card-body">
                  <p class="card-text">Set</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/set')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/skadi.jpg" class=".img-thumbnail" alt="skadi" />
                </div>
                <div class="card-body">
                  <p class="card-text">Skadi</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/skadi')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/sobek.jpg" class=".img-thumbnail" alt="sobek" />
                </div>
                <div class="card-body">
                  <p class="card-text">Sobek</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/sobek')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/sol.jpg" class=".img-thumbnail" alt="sol" />
                </div>
                <div class="card-body">
                  <p class="card-text">Sol</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/sol')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/sun-wukong.jpg" class=".img-thumbnail" alt="sun-wukong" />
                </div>
                <div class="card-body">
                  <p class="card-text">Sun-wukong</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/sun-wukong')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/susano.jpg" class=".img-thumbnail" alt="susano" />
                </div>
                <div class="card-body">
                  <p class="card-text">Susano</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/susano')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/sylvanus.jpg" class=".img-thumbnail" alt="sylvanus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Sylvanus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/sylvanus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/terra.jpg" class=".img-thumbnail" alt="terra" />
                </div>
                <div class="card-body">
                  <p class="card-text">Terra</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/terra')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/thanatos.jpg" class=".img-thumbnail" alt="thanatos" />
                </div>
                <div class="card-body">
                  <p class="card-text">Thanatos</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/thanatos')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/the-morrigan.jpg" class=".img-thumbnail" alt="the-morrigan" />
                </div>
                <div class="card-body">
                  <p class="card-text">The-morrigan</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/the-morrigan')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/thor.jpg" class=".img-thumbnail" alt="thor" />
                </div>
                <div class="card-body">
                  <p class="card-text">Thor</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/thor')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/thoth.jpg" class=".img-thumbnail" alt="thoth" />
                </div>
                <div class="card-body">
                  <p class="card-text">Thoth</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/thoth')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/tyr.jpg" class=".img-thumbnail" alt="tyr" />
                </div>
                <div class="card-body">
                  <p class="card-text">Tyr</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/tyr')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ullr.jpg" class=".img-thumbnail" alt="ullr" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ullr</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ullr')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/vamana.jpg" class=".img-thumbnail" alt="vamana" />
                </div>
                <div class="card-body">
                  <p class="card-text">Vamana</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/vamana')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/vulcan.jpg" class=".img-thumbnail" alt="vulcan" />
                </div>
                <div class="card-body">
                  <p class="card-text">Vulcan</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/vulcan')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/xbalanque.jpg" class=".img-thumbnail" alt="xbalanque" />
                </div>
                <div class="card-body">
                  <p class="card-text">Xbalanque</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/xbalanque')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/xing-tian.jpg" class=".img-thumbnail" alt="xing-tian" />
                </div>
                <div class="card-body">
                  <p class="card-text">Xing-tian</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/xing-tian')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/yemoja.jpg" class=".img-thumbnail" alt="yemoja" />
                </div>
                <div class="card-body">
                  <p class="card-text">Yemoja</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/yemoja')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/ymir.jpg" class=".img-thumbnail" alt="ymir" />
                </div>
                <div class="card-body">
                  <p class="card-text">Ymir</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/ymir')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/zeus.jpg" class=".img-thumbnail" alt="zeus" />
                </div>
                <div class="card-body">
                  <p class="card-text">Zeus</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/zeus')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="character-image">
                  <img src="@/assets/images/zhong-kui.jpg" class=".img-thumbnail" alt="zhong-kui" />
                </div>
                <div class="card-body">
                  <p class="card-text">Zhong-kui</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="$router.push('/zhong-kui')"
                      >View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

































































































          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron h1 {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

.vue-footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.vue-footer p {
  margin-bottom: 0.25rem;
}

#app {
  width: 0;
}
</style>
