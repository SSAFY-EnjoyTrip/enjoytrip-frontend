<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  plan: Object,
});

console.log(props.plan);

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
  <q-card @click="viewDetailHandler">
    <q-img :src="plan.img" loading="eager">
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ plan.title }}
      </div>
    </q-img>
    <q-card-section>
      <div class="ellipsis">{{ plan.content }}</div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.q-card {
  height: 180px
}
.q-img {
  height: 130px;
}
</style>
