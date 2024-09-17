<script setup>
import Pop from "./utils/Pop.js";
import { artService } from "./services/ArtService.js";
import { computed, onMounted } from "vue";
import { AppState } from "./AppState.js";

onMounted(() => { getArt() })

const artworks = computed(() => AppState.artworks)

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.meow(error)
  }
}
</script>

<template>

  <body>
    <header>
      <h1 class="ms-5">CW</h1>
    </header>
    <main class="container-fluid">
      <section class="row">
        <div class="col-2">
          <div class="pageSelection">
            <p class="text-center mb-0">pager 1 / 10</p>
            <button class="w-100 btn btn-outline-dark my-1">Previous</button>
            <button class="w-100 btn btn-outline-dark my-1">Next</button>
          </div>
        </div>
        <div class="col-10">
          <div class="row justify-content-between">
            <h1>Codeworks Institute of Fine Art</h1>
            <div class="col-3 g-0" v-for="artwork in artworks" :key="artwork.id">
              <div class="imgBox">
                <img :src="artwork.smallImg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  font-family: Verdana;
}

.imgBox {
  margin: .25em;
  box-shadow: 2px 2px 5px black;
}

.pageSelection {
  margin-top: 80vh;
}
</style>
