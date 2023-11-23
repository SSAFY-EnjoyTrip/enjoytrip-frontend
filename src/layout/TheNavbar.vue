<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menu';
import { useMemberStore } from '../stores/member';

import { useRouter } from 'vue-router';

const menuStore = useMenuStore();
const memberStore = useMemberStore();

const { userInfo } = storeToRefs(memberStore);
const { menuList } = storeToRefs(menuStore);

const { userLogout } = memberStore;
const { changeMenuState } = menuStore;

const router = useRouter();
const logout = ref(false);

const visibleMenuList = computed(() => {
  return menuList.value.filter((menu) => menu.show === true);
});

const logoutHandler = async () => {
  await userLogout(userInfo.value.id);
  changeMenuState();
  await router.push('/');
};
</script>

<template>
  <q-header elevated class="bg-white text-black" height-hint="98">
    <q-tabs align="left">
      <q-route-tab to="/" label="EnjoyTrip" />
      <q-space />

      <q-route-tab to="/" label="홈" />
      <q-route-tab to="/attractions" label="관광지" />
      <q-route-tab to="/plans" label="여행일정" />
      <q-route-tab to="/plans/regist" label="Plan Regist" />

      <q-space />

      <div class="row">
        <template v-for="menu in visibleMenuList" :key="menu.name">
          <template v-if="menu.name === 'logout'">
            <q-route-tab
              :key="menu.name"
              :label="menu.name"
              @click="logout = true"
            />
          </template>
          <template v-else>
            <q-route-tab
              :key="menu.name"
              :label="menu.name"
              :to="`/${menu.routeName}`"
            />
          </template>
        </template>
      </div>
    </q-tabs>
  </q-header>

  <q-dialog v-model="logout" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <!-- <q-avatar icon="caution" color="primary" text-color="white" /> -->
          <span class="q-ml-sm">로그아웃 하시겠습니까?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="확인" color="primary" v-close-popup @click="logoutHandler"/>
          <q-btn flat label="취소" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<style scoped></style>
