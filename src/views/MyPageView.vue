<script setup>
import { ref, provide } from 'vue';
import { storeToRefs } from 'pinia';

import { useMemberStore } from '../stores/member';

import MyPageProfile from '../components/Mypage/MyPageProfile.vue';
import MyPageTab from '../components/MyPage/MyPageTab.vue';
import KakaoMap from '../components/KakaoMap/KakaoMap.vue';

const memberStore = useMemberStore();
const selectedPlan = ref(null);

const { userInfo } = storeToRefs(memberStore);
const { getUserInfo } = memberStore;

provide('parentView', 'MyPageView');
provide('userInfo', userInfo);
provide('getUserInfo', getUserInfo);
provide('selectedPlan', selectedPlan);
</script>

<template>
  <q-page class="q-pa-xl row justify-between">
    <div class="col-4">
      <MyPageProfile />
    </div>

    <q-separator vertical color="blue-1" size="2px" />

    <div class="col-7">
      <KakaoMap />
      <MyPageTab />
    </div>
  </q-page>
</template>

<style scoped></style>
