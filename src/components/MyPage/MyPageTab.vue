<script setup>
import { ref } from 'vue';

import MyPageTabMyPlan from './MyPageTabMyPlan.vue';
import MyPageTabBookmark from './MyPageTabBookmark.vue';

const tab = ref('myplans');
</script>

<template>
  <div class="q-pt-xl">
    <div>
      <q-tabs
        v-model="tab"
        align="justify"
        indicator-color="blue-2"
        class="q-mb-lg"
      >
        <q-tab name="myplans" label="나의 플랜" />
        <q-tab name="bookmarks" label="북마크한 플랜" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
        >
          <q-tab-panel name="myplans">
            <MyPageTabMyPlan />
          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
        >
          <q-tab-panel name="bookmarks">
            <MyPageTabBookmark/>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>