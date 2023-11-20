<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import TheNavbar from './layout/TheNavbar.vue';

const route = useRoute();
const invisiableRouter = ref(['login', 'signup', 'planDetail']);
</script>

<template>
  <div class="">
    <q-layout view="lHr Lpr lFr">
      <TheNavbar v-if="!invisiableRouter.includes(route.name)" />
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped></style>
