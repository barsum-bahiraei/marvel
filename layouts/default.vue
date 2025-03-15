<template>
  <main>
    <header class="bg-header-gradient h-[192px]">
      <div class="container px-3 mx-auto py-4">
        <div>
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