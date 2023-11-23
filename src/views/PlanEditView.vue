<script setup>
import { ref, provide, onMounted } from 'vue';
import axios from 'axios';

import KakaoMap from '../components/KakaoMap/KakaoMap.vue';
import PlanEditDetail from '../components/PlanEditDetail/PlanEditDetail.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const attractionList = ref([]);

const { plan } = history.state;
const planId = plan.id;

onMounted(async () => {
  const res = await axios.get(`${BASE_URL}/plans/${planId}`);
  const data = await res.data;

  attractionList.value = data.planDetail.map((el) => el.attractionDto);
});

provide('attractionList', attractionList);
provide('parentView', 'PlanEditView');
</script>

<template>
  <q-page class="row">
    <div class="col-5">
      <PlanEditDetail />
    </div>
    <div class="col-7">
      <KakaoMap style="height: 100vh" />
    </div>
  </q-page>
</template>

<style scoped></style>
