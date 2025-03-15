<template>
  <NuxtLayout>
    <template #header>
      <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12">
        <div class="">
          <img
              :src="`${characterItemDetail?.thumbnail.path}/portrait_xlarge.jpg`"
              :alt="characterItemDetail?.name"
              class="w-full md:w-[240px] md:h-[240px] rounded-lg md:object-cover"
          />
        </div>
        <div class="text-white">
          <div class="text-[32px] font-medium">
            {{ characterItemDetail?.name }}
          </div>
          <div class="mt-8 text-secondary-4">
            {{ characterItemDetail?.description }}
          </div>
          <div class="mt-5 text-secondary-4">
            <a
                v-for="url in characterItemDetail?.urls"
                :key="url.type"
                :href="url.url"
                target="_blank"
                class="border border-secondary-5 rounded px-3 py-2 mr-3 inline-flex items-center justify-center font-medium capitalize"
            >
              <NuxtImg src="/images/export.svg" with="24" height="24" class="mr-2"/>
              {{ url.type }}
            </a>
          </div>
        </div>
      </div>
    </template>
    <div class="bg-secondary py-8 min-h-[89vh]">
      <div class="container px-3 mx-auto">
        <div class="text-[24px] font-medium text-white mb-4">
          Comics
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <CharacterFilm
              v-for="item in characterComicsList?.data?.results"
              :key="item.id"
              :name="item.title"
              :thumbnail="item.thumbnail.path"
              :extension="item.thumbnail.extension"
          />
        </div>
        <div class="text-[24px] font-medium text-white mb-4 mt-12 ">
          Series
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <CharacterFilm
              v-for="item in characterSeriesList?.data?.results"
              :key="item.id"
              :name="item.title"
              :thumbnail="item.thumbnail.path"
              :extension="item.thumbnail.extension"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import CharacterFilm from "~/components/character-film.vue";
import {computed, onMounted} from "vue";
import {useCharacterDetail} from "~/composable/use-character-detail";
import {useCharacterSeriesList} from "~/composable/use-character-series-List";
import {useCharacterComicsList} from "~/composable/use-character-comics-List";
import {useRoute} from "#vue-router";

useHead({
  title: 'Marvel | Character Detail',
  meta: [
    {name: 'description', content: 'Browse a Detail of Marvel characters with detailed information.'},
    {name: 'robots', content: 'index, follow'},
  ]
});

const {characterDetail, getCharacterDetail} = useCharacterDetail();
const {characterSeriesList, getCharacterSeriesList} = useCharacterSeriesList();
const {characterComicsList, getCharacterComicsList} = useCharacterComicsList();
const route = useRoute();

const characterItemDetail = computed(() => characterDetail.value?.data?.results[0]);

onMounted(() => {
  getCharacterDetail(+route.params.id);
  getCharacterComicsList(+route.params.id);
  getCharacterSeriesList(+route.params.id);
})
</script>