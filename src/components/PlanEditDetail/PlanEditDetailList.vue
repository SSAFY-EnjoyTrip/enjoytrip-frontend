<script setup>
import { ref, provide, inject } from 'vue';
import draggable from 'vuedraggable';

import PlanEditDetailListItem from './PlanEditDetailListItem.vue';
import AttractionView from '@/views/AttractionView.vue';

const layout = ref(false);
const attractionList = inject('attractionList');
// const drag = ref(false);

const deleteAttractionHandler = (contentId) => {
  attractionList.value = attractionList.value.filter(
    (attraction) => attraction.contentId !== contentId
  );
  console.log('after: ', attractionList.value);
};

provide('isPopup', true);
</script>

<template>
  <q-dialog v-model="layout" full-width>
    <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-space />
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-xl">
          <AttractionView />
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>

  <div class="text-h5 q-mt-xl">관광지 목록</div>
  <q-btn
    label="관광지 추가하기"
    color="primary"
    @click="layout = true"
    class="full-width q-my-lg"
  />
  <draggable
    v-model="attractionList"
    item-key="contentId"
    @change="console.log(attractionList)"
  >
    <template #item="{ element }">
      <PlanEditDetailListItem
        :key="contentId"
        :attraction="element"
        @onDelete="deleteAttractionHandler"
      />
    </template>
  </draggable>
  <!-- <PlanEditDetailListItem
    v-for="attraction in attractionList"
    :key="attraction.contentId"
    :attraction="attraction"
    @onDelete="deleteAttractionHandler"
  /> -->
</template>

<style scoped></style>
