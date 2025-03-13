<template>
  <div>
    <AppHeader/>
    <slot/>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "~/layouts/app-header.vue";
</script>