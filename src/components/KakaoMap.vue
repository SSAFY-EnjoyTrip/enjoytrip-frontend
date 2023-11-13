<script setup>
import { ref, onMounted } from 'vue';

const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
const map = ref(null);

const loadMap = () => {
  const container = document.querySelector('#map');
  const options = {
    center: new window.kakao.maps.LatLng(37.541, 126.986),
    level: 9,
  };

  map.value = new window.kakao.maps.Map(container, options);
};

const loadScript = () => {
  const script = document.createElement('script');

  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`;
  script.onload = () => window.kakao.maps.load(loadMap);

  document.head.appendChild(script);
};

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    loadMap();
  } else {
    loadScript();
  }
});
</script>

<template>
  <div id="map" style="width:100%;height:400px;"></div>
</template>

<style scoped></style>
