<script setup>
import { ref } from 'vue';

const keyword = ref('');
</script>

<template>
  <q-input v-model="keyword" type="search" rounded outlined>
    <template #append>
      <q-icon name="search" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<style scoped>
.q-input {
  width: 50%;
}
</style>
