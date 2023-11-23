<script setup>
import { onMounted, ref, inject } from 'vue';
import axios from 'axios';

import MyPageTabCard from './MyPageTabCard.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const userInfo = inject('userInfo');
const userId = userInfo.value.id;

const myPlanList = ref([]);

const getMyPlanList = async () => {
  const res = await axios.get(`${BASE_URL}/plans/myplan/${userId}`);
  const data = await res.data;

  myPlanList.value = data;
};

onMounted(() => {
  getMyPlanList();
});
</script>

<template>
  <div class="row justify-around">
    <MyPageTabCard
      v-for="plan in myPlanList"
      :key="plan.id"
      :plan="plan"
      class="col-5 q-pa-lg"
      type="myplan"
    />
  </div>
</template>

<style scoped></style>
