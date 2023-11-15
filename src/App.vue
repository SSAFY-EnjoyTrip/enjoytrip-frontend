<script setup>
import TheNavbar from './layout/TheNavbar.vue';
</script>

<template>
  <div class="q-pa-md">
  <q-layout view="lHr Lpr lFr">
    <TheNavbar />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</div>
</template>

<style scoped>

</style>