<script setup>
import { ref } from 'vue';

const height = ref(window.innerHeight);
</script>

<template>
  <q-parallax :height="height" class="video-parallax">
    <template v-slot:media>
      <video
        poster="@/assets/altImage.png"
        autoplay
        loop
        muted
        class="video-element"
      >
        <!-- <source type="video/mp4" src="@/assets/ocean.mp4" /> -->
        <source type="video/mp4" src="@/assets/train.mp4" />
      </video>
      <!-- <div class="overlay"></div> -->
    </template>

    <h3 class="text-white">Enjoy Trip</h3>
  </q-parallax>
</template>

<style scoped>
/* .video-container {
  position: relative;
} */

/* .video-parallax {
  height: 100vh;
} */

.video-element {
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
} */
</style>
