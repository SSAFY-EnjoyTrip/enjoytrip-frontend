<script setup>
import { ref, defineAsyncComponent } from 'vue';
import axios from 'axios';
import InfiniteLoading from 'v3-infinite-loading';

const attractions = ref([]);
let page = 1;

const BASE_URL = import.meta.env.VITE_BASE_URL;
const LIMIT = import.meta.env.VITE_ATTRACTION_LIST_LIMIT;

const AttractionListItem = defineAsyncComponent(() =>
  import('./AttractionListItem.vue')
);

const load = async ($state) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/attractions/list?page=${page}&limit=${LIMIT}`
    );
    const json = await res.data.attractions;

    if (json.length < LIMIT) $state.complete();
    else {
      attractions.value.push(...json);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};
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
  <InfiniteLoading @infinite="load" />

  <q-page-scroller position="bottom-right" :scroll-offset="0" :offset="[0, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="black" />
  </q-page-scroller>
</template>

<style scoped></style>
