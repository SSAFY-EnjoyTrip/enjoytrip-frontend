<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  plan: Object,
  type: {
    type: String,
    default: null,
  }
});

const plan = props.plan;
const type = props.type;

const router = useRouter();

const viewDetailHandler = () => {
  router.push({
    path: `/plans/${props.plan.id}`,
    state: {
      plan: { ...props.plan },
    },
  });
};

const viewEditDetailHandler = (e) => {
  e.stopPropagation();

  router.push({
    path: `/plans/edit/${props.plan.id}`,
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
      <q-btn v-if="type === 'myplan'" icon="edit" @click="(e) => viewEditDetailHandler(e)" class="z-top" />
    </div>
    <div class="row">
      <div class="col-7 ellipsis">
        {{ plan.content }}
      </div>
      <div class="col-5">
        <q-img
          fit="cover"
          :src="plan.img"
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
.q-img {
  height: 100px;
}
</style>
