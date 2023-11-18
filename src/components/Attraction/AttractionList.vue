<script setup>
import { defineAsyncComponent, inject } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';

const AttractionListItem = defineAsyncComponent(() =>
  import('./AttractionListItem.vue')
);

const attractions = inject('attractions');
const getAttractions = inject('getAttractions');
</script>

<template>  
  <div class="row q-col-gutter-lg">
    <div
      v-for="attraction in attractions"
      :key="attraction.contentId"
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
    >
      <AttractionListItem :attraction="attraction" />
    </div>
  </div>
  <InfiniteLoading @infinite="getAttractions" />

  <q-page-scroller position="bottom-right" :scroll-offset="0" :offset="[0, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="black" />
  </q-page-scroller>
</template>

<style scoped></style>
