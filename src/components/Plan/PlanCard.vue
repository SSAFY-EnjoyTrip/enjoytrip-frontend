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
  <div>
    <q-card flat bordered @click="viewDetailHandler">
      <q-img :src="plan.img" fit="cover" loading="lazy">
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
        <div class="text-h5 q-mt-sm q-mb-xs ellipsis">{{ plan.title }}</div>
        <div class="text-caption text-grey ellipsis">
          {{ plan.content || '내용 없음' }}
        </div>
        <div>
          {{ plan.updatedAt }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.q-img {
  height: 250px;
}
</style>
