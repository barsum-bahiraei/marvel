<template>
  <NuxtLayout>
    <template #header>
      <div class="bg-secondary p-3 rounded flex">
        <input
            v-model.trim="characterParams.nameStartsWith"
            class="bg-secondary-1 placeholder-white w-full rounded px-3 block"
            type="text"
            placeholder="Search for characters..."
            @keyup.enter="getCharacterList()"
        >
        <button class="bg-danger text-white py-2 px-3 rounded ml-3" @click="getCharacterList()">Search</button>
      </div>
    </template>
    <div class="bg-secondary py-8">
      <div class="container px-3 mx-auto grid md:grid-cols-4 gap-6">
        <CharacterFilm
            v-for="item in characterList?.data?.results"
            :key="item.id"
            :name="item.name"
            :thumbnail="item.thumbnail.path"
        />
      </div>
      <Pagination
          :total="characterList?.data?.total"
          :offset="characterParams.offset"
          :limit="characterParams.limit"
          @change-offset="changeOffset"
      />
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import Pagination from "~/components/pagination.vue";
import CharacterFilm from "~/components/character-film.vue";
import {onMounted} from "vue";
import {useCharacterList} from "~/composable/useCharacterList";

const {characterList, characterParams, getCharacterList} = useCharacterList();

function changeOffset(newOffset) {
  characterParams.value.offset = newOffset;
  getCharacterList();
};
onMounted(() => {
  getCharacterList();
})
</script>