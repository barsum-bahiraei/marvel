<template>
  <NuxtLayout>
    <template #header>
      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div class="">
          <NuxtImg src="/img.png" alt="this is picture" class="w-full"/>

        </div>
        <div class="text-white">
          <div>
            Thor
          </div>
          <div class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur dignissimos dolorum earum facilis
            id illum, itaque iusto, laboriosam libero magni odit officiis perspiciatis quasi quis quisquam repellat,
            suscipit voluptatem!
          </div>
          <div class="mt-4">
            <button class="border rounded px-3 py-2">Details</button>
            <button class="border rounded px-3 py-2 mx-3">Wiki</button>
            <button class="border rounded px-3 py-2">Comiclink</button>
          </div>
        </div>
      </div>
    </template>
    <div class="bg-secondary py-8">
      <div class="container px-3 mx-auto">
        <div class="text-[24px] text-white mb-4">
          Comics
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <CharacterFilm/>
        </div>
        <div class="text-[24px] text-white mb-4 mt-12">
          Series
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <CharacterFilm/>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import CharacterFilm from "~/components/character-film.vue";
import MarvelServices from "~/services/marvel-services";
import {onMounted} from "vue";

function getCharacterDetail() {
  MarvelServices
      .getCharacterDetail(1010888)
      .then((response) => {
        console.log(response);
      })
}

function getCharacterComicsList() {
  MarvelServices
      .getCharacterComicsList(1010888)
      .then((response) => {
        console.log(response);
      })
}

function getCharacterSeriesList() {
  MarvelServices
      .getCharacterSeriesList(1010888)
      .then((response) => {
        console.log(response);
      })
}

onMounted(() => {
  getCharacterDetail();
  getCharacterComicsList();
  getCharacterSeriesList();
})
</script>