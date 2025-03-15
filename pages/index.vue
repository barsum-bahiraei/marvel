<template>
  <NuxtLayout>
    <template #header>
      <div class="bg-secondary p-3 rounded flex">
        <input
            class="bg-secondary-1 placeholder-white w-full rounded px-3 block"
            type="text"
            placeholder="Search for characters..."
        >
        <button class="bg-danger text-white py-2 px-3 rounded ml-3">Search</button>
      </div>
    </template>
    <div class="bg-secondary py-8">
      <div class="container px-3 mx-auto grid md:grid-cols-4 gap-6">
        <CharacterFilm/>
      </div>
      <PageNumber :total-items="1000" :current-page="count" :items-per-page="20" @page-change="(page)=>count = page"/>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import PageNumber from "~/components/page-number.vue";
import CharacterFilm from "~/components/character-film.vue";

const count = ref(1);
</script>