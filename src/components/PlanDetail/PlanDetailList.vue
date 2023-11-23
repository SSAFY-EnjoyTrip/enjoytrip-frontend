<script setup>
import { inject } from 'vue';
import PlanDetailListItem from './PlanDetailListItem.vue';

const attractionList = inject('attractionList');
</script>

<template>
  <div class="text-h5 q-mt-xl q-mb-lg">관광지 목록</div>
  <PlanDetailListItem
    v-for="attraction in attractionList"
    :key="attraction.contentId"
    :attraction="attraction"
  />
</template>

<style scoped></style>
