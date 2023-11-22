<script setup>
import { ref, inject } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps({
  attraction: {
    Type: Object,
    required: true,
  },
});

const isPopup = inject('isPopup');

const selectedAttraction = inject('selectedAttraction');
const attractionList = inject('attractionList');
const attraction = ref(props.attraction);

const $q = useQuasar();

const setAttraction = () => {
  selectedAttraction.value = attraction.value;
};
const addAttraction = () => {
  console.log('before: ', attractionList.value);
  if (attractionList.value.some((el) => el.contentId === attraction.value.contentId)) {
    // $q.notify({
    //   type: 'warning',
    //   message: '이미 마지막에 추가한 관광지입니다. 정말 추가하시겠습니까?',
    //   actions: [
    //     {
    //       label: '예',
    //       color: 'primary',
    //       handler: () => {
    //         attractionList.value.push(attraction.value);
    //         $q.notify({
    //           type: 'primary',
    //           message: `'${attraction.value.title}'이 추가되었습니다.`,
    //         });
    //       },
    //     },
    //     { label: '아니오', color: 'primary' },
    //   ],
    // });
    $q.notify({
      type: 'negative',
      message: '이미 추가한 관광지입니다.',
    })
  } else {
    attractionList.value = [...attractionList.value, attraction.value];
    $q.notify({
      type: 'primary',
      message: `<b>'${attraction.value.title}'</b> 이 추가되었습니다.`,
      html: true,
    });
  }
  console.log('after: ', attractionList.value);
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
        v-if="isPopup"
        fab
        color="primary"
        icon="add"
        class="absolute"
        style="top: 0; right: 80px; transform: translateY(-50%)"
        @click="addAttraction"
      />
      <q-btn
        fab
        color="primary"
        icon="place"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
        @click="setAttraction"
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
    </q-card-section>
  </q-card>
</template>

<style scoped>
.img {
  width: 100%;
  height: 300px;
}
</style>
