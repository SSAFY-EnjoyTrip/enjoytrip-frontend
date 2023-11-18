<script setup>
import { ref, onMounted, watch, inject } from 'vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const sidoList = ref([]);
const gugunList = ref([]);

const selectedSido = inject('selectedSido');
const selectedGugun = inject('selectedGugun');
const keyword = inject('keyword');

const getSido = async () => {
  const res = await axios.get(`${BASE_URL}/map/sido`);
  sidoList.value = res.data.map((el) => {
    return { label: el.sidoName, value: el.sidoCode };
  });

  gugunList.value = [];
};

const getGugun = async (sidoCode) => {
  const res = await axios.get(`${BASE_URL}/map/gugun?sido=${sidoCode}`);
  gugunList.value = res.data.map((el) => {
    return { label: el.gugunName, value: el.gugunCode };
  });
};

onMounted(() => {
  getSido();
});

watch((selectedSido), (newSido) => {
  selectedGugun.value = null;
  getGugun(newSido);
});
</script>

<template>
  <q-select
    v-model="selectedSido"
    :options="sidoList"
    label="시/도를 선택하세요"
    emit-value
    map-options
  />
  <q-select
    v-model="selectedGugun"
    :options="gugunList"
    label="구/군을 선택하세요"
    emit-value
    map-options
  />
  <q-input v-model="keyword" label="찾고싶은 장소를 입력하세요">
    <template #append>
      <q-icon name="search" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<style scoped></style>
