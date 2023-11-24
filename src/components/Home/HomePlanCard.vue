<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  plan: Object,
});

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
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ plan.title }}
      </div>
    </q-img>
  </q-card>
</template>

<style scoped>
.q-card {
  max-width: 50px;
}
</style>
