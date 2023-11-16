<script setup>
import { ref } from 'vue';
import router from '@/router/index';

const props = defineProps({
  attraction: {
    Type: Object,
    required: true,
  },
});

const attraction = ref(props.attraction);

const createMarkerHandler = () => {
  router.push({
    name: 'plans',
    state: {
      attraction: { ...attraction.value },
    },
  });
};
</script>

<template>
  <q-card flat bordered>
    <q-img
      v-if="attraction.firstImage !== ''"
      :src="attraction.firstImage"
      loading="eager"
      fit="cover"
      class="img"
    />
    <q-img
      v-else
      src="@/assets/altImage.png"
      loading="eager"
      fit="cover"
      class="img"
    />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="place"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
        @click="createMarkerHandler"
      />

      <div class="row no-wrap items-center q-mt-md">
        <div class="col text-h6 ellipsis">
          {{ attraction.title }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="row q-pt-none items-center">
      <div class="text-subtitle1">
        {{ attraction.addr1 }}
      </div>
      <!-- <div class="text-caption text-grey q-ml-sm ellipsis">
        {{ attraction.addr2 }}
      </div> -->
    </q-card-section>
  </q-card>
</template>

<style scoped>
.img {
  width: 100%;
  height: 300px;
}
</style>
