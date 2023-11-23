<script setup>
import { onMounted } from 'vue';
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
  <q-card class="q-ma-md" flat bordered @click="viewDetailHandler">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom">
        <q-icon
          name="favorite_border"
          size="20px"
          color="red"
          class="q-mr-xs"
        />
        {{ plan.likeCount }}
      </div>
    </q-img>

    <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ plan.title }}</div>
      <div class="text-caption text-grey">
        {{ plan.content }}
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.q-card {
  max-width: 300px;
}
</style>
