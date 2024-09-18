<script setup>
import Pop from "./utils/Pop.js";
import { artService } from "./services/ArtService.js";
import { computed, onMounted, ref } from "vue";
import { AppState } from "./AppState.js";

onMounted(() => { getArt() })

const artworks = computed(() => AppState.artworks)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

const pageSelectorInput = ref(0)

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.meow(error)
  }
}
async function changePage(pageNumber) {
  try {
    await artService.changePage(pageNumber)
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
        <div class="col-sm-2 divider d-flex align-items-end justify-content-center">
          <div class="sticky-sm-bottom">
            <p class="mb-0 text-center"><i class="mdi mdi-book-open fs-1"></i></p>
            <div class="text-center mb-0 d-flex justify-content-center">
              pages
              <form @submit.prevent="changePage(pageSelectorInput)">
                <input v-model="pageSelectorInput" class="inputNumber text-center" type="number"
                  :placeholder="currentPage.toString()" minlength="1" :maxlength="totalPages">
              </form>
              / {{ totalPages }}
            </div>
            <button @click="changePage(currentPage - 1)" class="w-100 btn btn-outline-dark my-1"
              :disabled="currentPage < 2">Previous</button>
            <button @click="changePage(currentPage + 1)" class=" w-100 btn btn-outline-dark my-1"
              :disabled="currentPage == totalPages">Next</button>
          </div>
        </div>
        <div class="col-sm-10">
          <h1>Codeworks Institute of Fine Art</h1>
          <div class="masonry-container">
            <div class="" v-for="artwork in artworks" :key="artwork.id">
              <div class="imgBox mb-4">
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
  box-shadow: 2px 2px 5px black;
}

.divider {
  border-right: 2px solid black;
}

.masonry-container {
  columns: 4;
}

.inputNumber {
  height: 25px;
  width: 3em;
  border: none;
  box-shadow: none;
  margin-left: 1em;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
