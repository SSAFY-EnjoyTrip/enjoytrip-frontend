<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menu';
import { useMemberStore } from '../stores/member';

const menuStore = useMenuStore();
const memberStore = useMemberStore();

const { userInfo } = storeToRefs(memberStore);
const { menuList } = storeToRefs(menuStore);

const { userLogout } = memberStore;

const visibleMenuList = computed(() => {
  return menuList.value.filter((menu) => menu.show === true);
});
</script>

<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-tabs align="left">
      <q-route-tab to="/" label="Home" />
      <q-route-tab to="/attractions" label="Attractions" />
      <q-route-tab to="/plans" label="Plans" />
      <q-route-tab to="/plans/regist" label="Plan Regist" />

      <q-space />

      <div class="row">
        <template v-for="menu in visibleMenuList" :key="menu.name">
          <template v-if="menu.name === 'logout'">
            <q-route-tab
              :key="menu.name"
              :label="menu.name"
              :to="'/'"
              @click="userLogout(userInfo.value.id)"
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
</template>

<style scoped></style>
