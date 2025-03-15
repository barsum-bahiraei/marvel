<template>
  <NuxtLink :to="props.id ? `/detail/${props.id}` : ''" class="text-white border border-secondary-2 rounded-xl p-3">
    <NuxtImg :src="`${props.thumbnail}/portrait_xlarge.jpg`" alt="this is picture" class="w-full rounded-lg" loading="lazy"/>
    <span class="mt-3 inline-block">{{ props.name }}</span>
  </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string;
  thumbnail: string;
  id?: number;
}>();
</script>