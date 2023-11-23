<script setup>
import { ref, onMounted, provide, computed } from 'vue';
import { storeToRefs } from 'pinia';
import axios from 'axios';

import { useMemberStore } from '../stores/member';

import PlanSearch from '../components/Plan/PlanSearch.vue';
import PlanCard from '../components/Plan/PlanCard.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);

const options = ref(['최신순', '좋아요순']);
const model = ref(options.value[0]);

const planList = ref([]);
const keyword = ref('');

const getPlanList = async () => {
  const userId = userInfo.value?.id ?? 0;
  const res = await axios.get(`${BASE_URL}/plans?userId=${userId}`);

  planList.value = res.data;
};

onMounted(async () => {
  await getPlanList();
});

const filteredPlanList = computed(() => {
  if(planList.value.length <= 0) {
    return [];
  }
  
  const keywordFilteredPlanList = planList.value.filter((plan) =>
    plan.title.includes(keyword.value)
  );

  if(model.value === '최신순') {
    keywordFilteredPlanList.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  }
  else if(model.value === '좋아요순') {
    keywordFilteredPlanList.sort((a, b) => {
      return b.likeCount - a.likeCount;
    });
  }

  return keywordFilteredPlanList;
});

provide('keyword', keyword);
</script>

<template>
  <q-page class="q-pa-xl">
    <div class="text-h5 q-my-lg row justify-center">
      여행계획을 검색해보세요
    </div>
    <PlanSearch />

    <div class="q-my-xl">
      <div class="row">
        <q-space />
        <q-select
          outlined
          v-model="model"
          :options="options"
          label="정렬 순서"
          behavior="menu"
        />
      </div>
      <div class="row q-mt-lg q-col-gutter-xl">
        <PlanCard
          class="col-xl-3 col-lg-4 col-sm-6 col-xs-12"
          v-for="plan in filteredPlanList"
          :key="plan.id"
          :plan="plan"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.q-select {
  width: 200px;
}
</style>
