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
    <main class="container-fluid">
      <section class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <div class="row">
            <div class="col-3" v-for="artwork in artworks" :key="artwork.id">
              {{ artworks }}
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
