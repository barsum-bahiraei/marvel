<template>
  <NuxtLayout>
    <template #header>
      <div class="bg-secondary p-3 rounded flex mt-8">
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
        <NuxtLink v-for="item in 10" :key="item" to="/detail" class="text-white border border-secondary-2 rounded p-3">
          <NuxtImg src="/img.png" alt="this is picture" class="w-full"/>
          <span class="mt-3 inline-block">{{ item }}</span>
        </NuxtLink>
      </div>
      <PageNumber :total-items="1000" :current-page="count" :items-per-page="20" @page-change="(page)=>count = page"/>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import PageNumber from "~/components/page-number.vue";

const count = ref(1)

definePageMeta({
  layout: 'default', // Or any other layout name
})
</script>