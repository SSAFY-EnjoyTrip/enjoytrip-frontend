<script setup>
import { inject } from 'vue';

const keyword = inject('keyword');
</script>

<template>
  <div class="row justify-center">
    <q-input v-model="keyword" type="search" rounded outlined>
      <template #append>
        <q-icon name="search" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<style scoped>
.q-input {
  width: 50%;
}
</style>
