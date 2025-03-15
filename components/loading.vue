<template>
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-solid"></div>
  </div>
</template>

<script setup lang="ts">
import {isLoading} from "~/composable/use-loading.js";
</script>
