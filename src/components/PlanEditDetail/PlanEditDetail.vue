<script setup>
import { ref, inject } from 'vue';
import { storeToRefs } from 'pinia';
import axios, { HttpStatusCode } from 'axios';

import { useMemberStore } from '@/stores/member';
import router from '@/router';

import PlanEditDetailList from './PlanEditDetailList.vue';

const memberStore = useMemberStore();

const { userInfo } = storeToRefs(memberStore);

const BASE_URL = import.meta.env.VITE_BASE_URL;
const UNSPLASH_BASE_URL = import.meta.env.VITE_UNSPLASH_BASE_URL;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const { plan } = history.state;

const attractionList = inject('attractionList');
const title = ref(plan.title);
const content = ref(plan.content);
const img = ref(plan.img);
// public: 1, private: 0
const isPrivate = ref(!plan.isPublic);

const editPlanHandler = async () => {
  const res = await axios.put(`${BASE_URL}/plans/${plan.id}`, {
    id: plan.id,
    title: title.value,
    content: content.value,
    img: img.value,
    userId: userInfo.value.id,
    attractionList: attractionList.value,
    isPublic: isPrivate.value ? 0 : 1,
  });

  const { status } = res;

  if (status === HttpStatusCode.Ok) {
    router.push({ name: 'mypage' });
  }
};

const changeImageHandler = async () => {
  const res = await axios.get(
    `${UNSPLASH_BASE_URL}/?topic=nature&client_id=${UNSPLASH_KEY}`
  );
  const data = await res.data;

  img.value = data.urls.full;
};
</script>

<template>
  <div style="overflow: auto; max-height: 100vh">
    <q-card class="plan-img">
      <q-img :src="img">
        <div class="absolute-top-left toggle">
          <q-icon
          name="change_circle"
          class="cursor-pointer"
          size="30px"
          color="grey"
          @click="changeImageHandler"
        />
        </div>
        <div class="absolute-top-right toggle">
          <q-toggle v-model="isPrivate" icon="lock" color="yellow" />
        </div>
        <div class="absolute-bottom">
          <q-input class="text-h5" borderless v-model="title" dark />
        </div>
      </q-img>
    </q-card>

    <div class="q-pa-xl">
      <div>
        <div class="text-h5 q-mb-md">계획 설명</div>
        <div>
          <q-input v-model="content" filled autogrow />
        </div>
      </div>

      <div>
        <PlanEditDetailList />
      </div>

      <q-btn
        label="수정하기"
        color="primary"
        class="full-width q-my-lg"
        @click="editPlanHandler"
      />
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
.bookmark:hover {
  color: white;
  cursor: pointer;
}
.toggle {
  background: none;
}
</style>
