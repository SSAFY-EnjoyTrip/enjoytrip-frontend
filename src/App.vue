<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import TheNavbar from './layout/TheNavbar.vue';

const route = useRoute();
const invisiableRouter = ref(['/login', '/signup']);
</script>

<template>
  <div class="">
  <q-layout view="lHr Lpr lFr">
    <TheNavbar v-if="!invisiableRouter.includes(route.path)" />
    <q-page-container>
      <q-page class="q-px-xl">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</div>
</template>

<style scoped>

</style>