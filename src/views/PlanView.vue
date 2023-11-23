<script setup>
import { ref, onMounted } from 'vue';
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

const getPlanList = async () => {
  const userId = userInfo.value?.id ?? 0;
  const res = await axios.get(`${BASE_URL}/plans?userId=${userId}`);

  planList.value = res.data;
};

onMounted(async () => {
  await getPlanList();
});
</script>

<template>
  <q-page class="q-pa-xl">
    <div class="text-h5 q-my-lg">플랜을 검색해보세요</div>
    <PlanSearch />

    <!-- <div class="q-my-xl">
      <div class="text-h5">Top Weekly</div>
      <div class="row">
        <PlanCard class="col" v-for="plan in planList" :key="plan.id" :plan=plan />
      </div>
    </div>

    <div class="q-my-xl">
      <div class="text-h5">Top Monthly</div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
    </div>

    <div class="q-my-xl">
      <div class="text-h5">Top Yearly</div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
    </div> -->

    <div class="q-my-xl">
      <div class="row">
        <div class="text-h5">Plans</div>
        <q-space />
        <q-select
          outlined
          v-model="model"
          :options="options"
          label="정렬 순서"
          behavior="menu"
        />
      </div>
      <div class="row">
        <div class="row">
          <PlanCard class="col" v-for="plan in planList" :key="plan.id" :plan="plan" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.q-select {
  width: 200px;
}
</style>
