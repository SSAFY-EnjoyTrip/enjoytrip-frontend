<script setup>
import { onMounted, ref, inject } from 'vue';
import axios from 'axios';

import MyPageTabCard from './MyPageTabCard.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const userInfo = inject('userInfo');
const userId = userInfo.value.id;

const bookmarkList = ref([]);

const getBookmarkList = async () => {
  const res = await axios.get(`${BASE_URL}/plans/myplan/${userId}`);
  const data = await res.data;

  bookmarkList.value = data;
}

onMounted(() => {
  getBookmarkList();
})
</script>

<template>
  <div class="row justify-between">
    <MyPageTabCard v-for="plan in myPlanList" :key="plan.id" :plan="plan" class="col-5 q-pa-lg" />
  </div>
</template>

<style scoped>

</style>