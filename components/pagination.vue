<template>
  <div class="inline-flex items-center justify-between">
    <button
        class="mx-1"
        :disabled="currentPage === 1"
        @click="goToPage(1)"
    >
      <NuxtImg src="/images/double_arrow_left.svg" with="24" height="24"/>
    </button>


    <button
        class="mx-1"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
    >
      <NuxtImg src="/images/arrow_left.svg" with="24" height="24"/>
    </button>


    <div>
      <button
          v-if="startPage > 1"
          class="inline-flex justify-center items-center w-[27px] h-[27px] mx-1"
          @click="goToPage(1)"
      >
        1
      </button>

      <span v-if="startPage > 2" class="inline-flex justify-center items-center w-[27px] h-[27px] mx-1">...</span>

      <button
          v-for="page in pageNumbers"
          :key="page"
          :class="{ 'bg-danger rounded-full': page === currentPage }"
          @click="goToPage(page)"
          class="inline-flex justify-center items-center w-[27px] h-[27px] mx-1"
      >
        {{ page }}
      </button>

      <span v-if="endPage < totalPages - 1" class="inline-flex justify-center items-center w-[27px] h-[27px] mx-1">...</span>

      <button
          class="inline-flex justify-center items-center w-[27px] h-[27px] mx-1"
          v-if="endPage < totalPages"
          @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </div>


    <button
        class="mx-1"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
    >
      <NuxtImg src="/images/arrow_right.svg" with="24" height="24"/>
    </button>


    <button
        class="mx-1"
        :disabled="currentPage === totalPages"
        @click="goToPage(totalPages)"
    >
      <NuxtImg src="/images/double_arrow_right.svg" with="24" height="24"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';

const props = defineProps<{
  limit: number;
  offset: number;
  total: number;
}>();

const emit = defineEmits<{
  (e: 'change-offset', offset: number): void;
}>();

const currentPage = ref(Math.floor(props.offset / props.limit) + 1);

const totalPages = computed(() => Math.ceil(props.total / props.limit));

const pageNumbers = computed(() => {
  const pages = [];
  const maxPagesToShow = 5;
  const halfMaxPages = Math.floor(maxPagesToShow / 2);

  let startPage = Math.max(currentPage.value - halfMaxPages, 1);
  let endPage = Math.min(currentPage.value + halfMaxPages, totalPages.value);

  if (endPage - startPage < maxPagesToShow - 1) {
    if (startPage === 1) {
      endPage = Math.min(startPage + maxPagesToShow - 1, totalPages.value);
    } else {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

const startPage = computed(() => Math.max(currentPage.value - 2, 1));
const endPage = computed(() => Math.min(currentPage.value + 2, totalPages.value));

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  const newOffset = (page - 1) * props.limit;
  currentPage.value = page;
  emit('change-offset', newOffset);
};
</script>