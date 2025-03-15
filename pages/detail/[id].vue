<template>
  <NuxtLayout>
    <template #header>
      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div class="">
          <NuxtImg
              :src="`${characterDetail?.data?.results[0].thumbnail.path}/portrait_xlarge.jpg`"
              alt="this is picture"
              class="w-full"
              loading="lazy"
          />
        </div>
        <div class="text-white">
          <div>
            {{ characterDetail?.data?.results[0].name }}
          </div>
          <div class="mt-4">
            {{ characterDetail?.data?.results[0].description }}
          </div>
          <div class="mt-4">
            <a
                v-for="url in characterDetail?.data?.results[0].urls"
                :key="url.type"
                :href="url.url"
                target="_blank"
                class="border rounded px-3 py-2"
            >
              Details
            </a>
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
          <CharacterFilm
              v-for="item in characterComicsList?.data?.results"
              :key="item.id"
              :name="item.title"
              :thumbnail="item.thumbnail.path"
          />
        </div>
        <div class="text-[24px] text-white mb-4 mt-12">
          Series
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <CharacterFilm
              v-for="item in characterSeriesList?.data?.results"
              :key="item.id"
              :name="item.title"
              :thumbnail="item.thumbnail.path"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import CharacterFilm from "~/components/character-film.vue";
import {onMounted} from "vue";
import {useCharacterDetail} from "~/composable/use-character-detail";
import {useCharacterSeriesList} from "~/composable/use-character-series-List";
import {useCharacterComicsList} from "~/composable/use-character-comics-List";
import {useRoute} from "#vue-router";

const {characterDetail, getCharacterDetail} = useCharacterDetail();
const {characterSeriesList, getCharacterSeriesList} = useCharacterSeriesList();
const {characterComicsList, getCharacterComicsList} = useCharacterComicsList();
const route = useRoute();

onMounted(() => {
  getCharacterDetail(+route.params.id);
  getCharacterComicsList(+route.params.id);
  getCharacterSeriesList(+route.params.id);
})
</script>