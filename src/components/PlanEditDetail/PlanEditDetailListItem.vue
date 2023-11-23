<script setup>
const props = defineProps({
  attraction: Object,
});
const emit = defineEmits(['onDelete']);

const attraction = props.attraction;
const deleteAttraction = () => {
  console.log(attraction);
  emit('onDelete', attraction.contentId);
};
</script>

<template>
  <div class="q-mb-lg">
    <div class="q-mb-md row align-center">
      <q-icon name="place" class="marker" />
      <span class="text-h5">{{ attraction.title }}</span>
      <q-space />
      <q-icon name="delete" class="marker" @click="deleteAttraction" />
    </div>
    <div class="row">
      <div class="col-8">
        {{ attraction.addr1 }}
      </div>
      <div class="col-4">
        <q-img
          fit="cover"
          :src="attraction.firstImage || '/src/assets/altImage.png'"
        />
      </div>
    </div>
    <q-separator class="q-mt-sm"/>
  </div>
</template>

<style scoped>
.marker {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
