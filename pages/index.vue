<template>
  <NuxtLayout>
    <template #header>
      <div class="bg-secondary p-3 rounded flex">
        <input
            v-model.trim="characterParams.nameStartsWith"
            class="bg-secondary-1 placeholder-white w-full rounded px-3 py-3 block text-white outline-0"
            type="text"
            placeholder="Search for characters..."
            @keyup.enter="getCharacterList()"
        >
        <button
            class="bg-danger text-white py-2 px-3 rounded ml-3 flex justify-center items-center"
            @click="getCharacterList()"
        >
          <NuxtImg src="/images/search-normal.svg" alt="search" width="24" height="24" class="mr-1"/>
          <span class="hidden md:inline-block">Search</span>
        </button>
      </div>
    </template>
    <div class="bg-secondary py-8 min-h-[89vh]">
      <div class="container px-3 mx-auto grid md:grid-cols-4 gap-6">
        <CharacterFilm
            v-for="item in characterList?.data?.results"
            :id="item.id"
            :key="item.id"
            :name="item.name"
            :extension="item.thumbnail.extension"
            :thumbnail="item.thumbnail.path"
        />
      </div>
      <div class="flex justify-center mt-8">
        <Pagination
            :total="characterList?.data?.total"
            :offset="characterParams.offset"
            :limit="characterParams.limit"
            @change-offset="changeOffset"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import Pagination from "~/components/pagination.vue";
import CharacterFilm from "~/components/character-film.vue";
import {onMounted} from "vue";
import {useCharacterList} from "~/composable/use-character-list";

const {characterList, characterParams, getCharacterList} = useCharacterList();

function changeOffset(newOffset: number) {
  characterParams.value.offset = newOffset;
  getCharacterList();
}

watch(() => characterParams.value.nameStartsWith, (newValue) => {
  if (!newValue) {
    characterParams.value.nameStartsWith = null;
  }
})

onMounted(() => {
  getCharacterList();
})
</script>