<script setup>
import PlanDetailList from './PlanDetailList.vue';

import { ref, onMounted, inject } from 'vue';
import axios from 'axios';

const { plan } = history.state;
const attractionList = inject('attractionList');
const commentList = ref([]);
const planWriterInfo = ref({});

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getPlanDetailList = async () => {
  const res = await axios.get(`${BASE_URL}/plans/${plan.id}`);
  const data = await res.data;

  attractionList.value = await data.planDetail.map((el) => el.attractionDto);
  commentList.value = data.commentList;
};

const getPlanWriterInfo = async () => {
  const res = await axios.get(`${BASE_URL}/users/info?userId=${plan.userId}`);
  const data = await res.data;

  planWriterInfo.value = await data.userInfo;
};

onMounted(() => {
  getPlanDetailList();
  getPlanWriterInfo();
});
</script>

<template>
  <div style="overflow: auto; max-height: 100vh">
    <q-card class="plan-img">
      <q-icon
        name="bookmark"
        class="text-h4 bookmark absolute-top-right z-top"
      />
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="text-h5 absolute-bottom text-left">{{ plan.title }}</div>
      </q-img>
    </q-card>

    <div class="main q-pa-lg">
      <div class="header row">
        <q-avatar size="80px" class="q-mr-md">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-mr-xl">
          <div class="name text-h5">{{ planWriterInfo.nickname }}</div>
          <div class="date text-h6">
            {{ new Date(plan.createdAt).toLocaleDateString() }}
          </div>
        </div>

        <q-space />

        <div class="infos col-2 row justify-between">
          <div>
            <q-icon
              name="favorite_border"
              size="20px"
              color="red"
              class="q-mr-xs"
            />
            <span class="like-count">{{ plan.likeCount }}</span>
          </div>
          <div>
            <q-icon
              name="chat_bubble_outline"
              size="20px"
              color="blue"
              class="q-mr-xs"
            />
            <span class="like-count">{{ commentList.length }}</span>
          </div>
        </div>
        <q-space />
      </div>
      <q-separator class="q-mt-lg" />
      <div class="q-pa-xl">
        <div>
          <div class="text-h5 q-mb-md">계획 설명</div>
          <div>
            <q-input v-model="plan.content" filled autogrow readonly />
          </div>
        </div>
        <PlanDetailList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-img {
  max-height: 250px;
  background-color: grey;
}
.header {
  display: flex;
  align-items: center;
}
.bookmark {
  color: rgba(0, 0, 0, 0.3);
}
.bookmark:hover {
  color: yellow;
  cursor: pointer;
}
</style>
