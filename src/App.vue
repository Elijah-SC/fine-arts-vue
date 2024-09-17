<script setup>
import Pop from "./utils/Pop.js";
import { artService } from "./services/ArtService.js";
import { onMounted } from "vue";

onMounted(() => { getArt() })

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

  </body>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
