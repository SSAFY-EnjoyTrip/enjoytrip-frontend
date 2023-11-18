<script setup>
import { provide, ref } from 'vue';

import AttractionList from '../components/Attraction/AttractionList.vue';
import KakaoMap from '../components/KakaoMap/KakaoMap.vue';

const selectedAttraction = ref(null);

provide('selectedAttraction', selectedAttraction);
</script>

<template>
  <KakaoMap />
  <AttractionList />
</template>

<style scoped>

</style>