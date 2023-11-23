<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  plan: Object,
});

const plan = props.plan;

const router = useRouter();
const viewDetailHandler = () => {
  router.push({
    path: `/plans/${props.plan.id}`,
    state: {
      plan: { ...props.plan },
    },
  });
};
</script>

<template>
  <q-card class="q-mb-lg" @click="viewDetailHandler">
    <div class="q-mb-md row align-center">
      <q-icon name="place" class="marker" />
      <span class="text-h5">{{ plan.title }}</span>
      <q-space />
    </div>
    <div class="row">
      <div class="col-8">
        {{ plan.content }}
      </div>
      <div class="col-4">
        <q-img
          fit="cover"
          :src="'/src/assets/altImage.png'"
        />
      </div>
    </div>
    <q-separator class="q-mt-sm"/>
  </q-card>
</template>

<style scoped>
.marker {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.5);
}
.q-card {
  cursor: pointer;
}
</style>
