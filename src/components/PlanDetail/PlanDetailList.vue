<script setup>
import PlanDetailListItem from './PlanDetailListItem.vue';
</script>

<template>
  <PlanDetailListItem v-for="n in 5" :key="n"/>
</template>

<style scoped>

</style>