<template>
  <main>
    <header class="bg-header-gradient">
      <div class="container px-3 mx-auto py-4">
        <div class="mb-8">
          <a href="" class="bg-danger text-white py-2 px-3 rounded inline-block">LOGO</a>
        </div>
        <slot name="header"/>
      </div>
    </header>

    <slot/>
  </main>
</template>
<script setup lang="ts">
</script>