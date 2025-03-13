<template>
  <nav class="flex items-center justify-center space-x-2 mt-4">
    <!-- First Button -->
    <button
        class="text-white mx-2 cursor-pointer"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        :disabled="currentPage === 1"
        @click="changePage(1)"
    >
      First
    </button>

    <!-- Previous Button -->
    <button
        class="text-white mx-2 cursor-pointer"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
    >
      &lt;
    </button>

    <!-- Page Numbers with "..." -->
    <template v-for="page in pages" :key="page">
      <button
          v-if="page === '...'"
          class="text-secondary-3"
          disabled
      >
        ...
      </button>
      <button
          v-else
          class="text-secondary-3 mx-2 cursor-pointer"
          :class="{ 'bg-danger flex justify-center items-center w-[25px] h-[25px] rounded-full text-white': currentPage === page }"
          @click="changePage(page)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next Button -->
    <button
        class="text-secondary-3 mx-2 cursor-pointer"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
    >
      &gt;
    </button>

    <!-- Last Button -->
    <button
        class="text-secondary-3 mx-2 cursor-pointer"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        :disabled="currentPage === totalPages"
        @click="changePage(totalPages)"
    >
      Last
    </button>
  </nav>
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue';

const props = defineProps({
  totalItems: {type: Number, required: true},
  itemsPerPage: {type: Number, required: true},
  currentPage: {type: Number, required: true},
});

const emit = defineEmits(['pageChange']);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const pages = computed(() => {
  const maxPagesToShow = 5;
  const pagesArray = [];

  if (totalPages.value <= maxPagesToShow) {
    for (let i = 1; i <= totalPages.value; i++) {
      pagesArray.push(i);
    }
  } else {
    if (props.currentPage <= 3) {
      pagesArray.push(1, 2, 3, 4, 5, '...', totalPages.value);
    } else if (props.currentPage >= totalPages.value - 2) {
      pagesArray.push(1, '...', totalPages.value - 2, totalPages.value - 1, totalPages.value);
    } else {
      pagesArray.push(1, '...', props.currentPage - 1, props.currentPage, props.currentPage + 1, '...', totalPages.value);
    }
  }

  return pagesArray;
});

const changePage = (page) => {
  if (typeof page === 'number' && page >= 1 && page <= totalPages.value) {
    emit('pageChange', page);
  }
};
</script>=