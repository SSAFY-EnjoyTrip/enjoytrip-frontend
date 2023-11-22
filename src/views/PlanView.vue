<script setup>
import { ref } from 'vue';

import PlanSearch from '../components/Plan/PlanSearch.vue';
import PlanCard from '../components/Plan/PlanCard.vue';

const options = ref(['최신순', '좋아요순']);
const model = ref(options.value[0]);
</script>

<template>
  <q-page class="q-pa-xl">
    <div class="text-h5 q-my-lg">플랜을 검색해보세요</div>
    <PlanSearch />

    <div class="q-my-xl">
      <div class="text-h5">Top Weekly</div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
    </div>

    <div class="q-my-xl">
      <div class="text-h5">Top Monthly</div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
    </div>

    <div class="q-my-xl">
      <div class="text-h5">Top Yearly</div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
      <div class="row">
        <PlanCard class="col" v-for="n in 4" :key="n" />
      </div>
    </div>

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
          <PlanCard class="col" v-for="n in 4" :key="n" />
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
