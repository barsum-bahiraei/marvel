<template>
  <NuxtLink :to="props.id ? `/detail/${props.id}` : ''" class="text-white border border-secondary-2 rounded-xl p-3">
    <img :src="thumbnailUrl" :alt="props.name" class="w-full rounded-lg"/>
    <span class="mt-3 inline-block">{{ props.name }}</span>
  </NuxtLink>
</template>
<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps<{
  name: string;
  extension: string;
  thumbnail: string;
  id?: number;
}>();

const thumbnailUrl = computed<string>(() => `${props.thumbnail}/portrait_xlarge.${props.extension}`)
</script>