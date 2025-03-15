<template>
  <NuxtLink to="/detail" class="text-white border border-secondary-2 rounded p-3">
    <NuxtImg :src="`${props.thumbnail}/portrait_xlarge.jpg`" alt="this is picture" class="w-full" loading="lazy"/>
    <span class="mt-3 inline-block">{{ props.name }}</span>
  </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string;
  thumbnail: string
}>();
</script>