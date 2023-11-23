<script setup>
import { ref, provide } from 'vue';

import KakaoMap from '../components/KakaoMap/KakaoMap.vue';
import PlanDetail from '../components/PlanDetail/PlanDetail.vue';

const attractionList = ref([]);

provide('attractionList', attractionList);
provide('parentView', 'PlanDetailView');
</script>

<template>
  <q-page class="row">
    <div class="col-5">
      <PlanDetail />
    </div>
    <div class="col-7">
      <KakaoMap style="height: 100vh" />
    </div>
  </q-page>
</template>

<style scoped></style>
