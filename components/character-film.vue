<template>
  <NuxtLink v-for="item in 10" :key="item" to="/detail" class="text-white border border-secondary-2 rounded p-3">
    <NuxtImg src="/img.png" alt="this is picture" class="w-full"/>
    <span class="mt-3 inline-block">{{ item }}</span>
  </NuxtLink>
</template>