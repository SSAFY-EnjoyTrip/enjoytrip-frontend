<script setup>
import { ref } from 'vue';

import PlanDetailListItemPlace from './PlanDetailListItemPlace.vue';

const isExpanded = ref(true);
</script>

<template>
  <div>
    <q-expansion-item>
      <template v-slot:header="{ isExpanded }">
        <q-item-section class="text-h5 title">title</q-item-section>
      </template>
      <q-separator class="q-my-sm" />
      <div class="text-h6 description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius
        molestias iste neque aliquam. Molestiae distinctio blanditiis atque id
        ea eius veritatis magni velit rem dicta itaque, illum modi doloremque.
      </div>
      <q-separator class="q-my-md" />

      <PlanDetailListItemPlace />
    </q-expansion-item>
  </div>
</template>

<style scoped>
</style>
