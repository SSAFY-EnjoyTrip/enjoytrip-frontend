<script setup>
import { provide, ref, watch } from 'vue';
import axios from 'axios';

import KakaoMap from '../components/KakaoMap/KakaoMap.vue';
import AttractionSearch from '../components/Attraction/AttractionSearch.vue';
import AttractionList from '../components/Attraction/AttractionList.vue';

const attractions = ref([]);
const selectedAttraction = ref(null);
const selectedSido = ref(null);
const selectedGugun = ref(null);
const keyword = ref(null);
const page = ref(1);

const BASE_URL = import.meta.env.VITE_BASE_URL;
const LIMIT = import.meta.env.VITE_ATTRACTION_LIST_LIMIT;

const getAttractions = async ($state) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/attractions/list`, {
        params: {
          page: page.value,
          limit: LIMIT,
          sidoCode: selectedSido.value,
          gugunCode: selectedGugun.value,
          keyword: keyword.value,
        }
      }
    );
    const json = await res.data.attractions;

    if (json.length < LIMIT) $state.complete();
    else {
      attractions.value.push(...json);
      $state.loaded();
    }
    page.value++;
  } catch (error) {
    $state.error();
  }
};

watch([selectedSido, selectedGugun, keyword], () => {
  attractions.value = [];
  page.value = 1;
  console.log(`selectedSido: ${selectedSido.value}, selectedGugun: ${selectedGugun.value}, keyword: ${keyword.value}`);
  getAttractions({ loaded() {}, error() {} });
});

provide('attractions', attractions);
provide('selectedAttraction', selectedAttraction);
provide('getAttractions', getAttractions);
provide('page', page);

provide('selectedSido', selectedSido);
provide('selectedGugun', selectedGugun);
provide('keyword', keyword);
</script>

<template>
  <KakaoMap />
  <AttractionSearch />
  <AttractionList />
</template>

<style scoped>

</style>