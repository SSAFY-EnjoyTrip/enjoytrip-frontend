<script setup>
import { ref, inject, onMounted, watch } from 'vue';

const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
const mapContainer = ref(null);
const map = ref(null);
const marker = ref(null);

const selectedAttraction = inject('selectedAttraction');

const loadScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadMap = () => {
  const options = {
    center: new kakao.maps.LatLng(37.541, 126.986),
    level: 9,
  };
  /* global kakao */
  map.value = new kakao.maps.Map(mapContainer.value, options);
};

const addMarker = (latitude, longitude) => {
  // 이전 마커가 있을 경우 지우기
  if(marker.value) {
    marker.value.setMap(null);
  }

  const position = new kakao.maps.LatLng(latitude, longitude);
  marker.value = new kakao.maps.Marker({
    position: position,
  });

  marker.value.setMap(map.value);

  // 마커 위치로 이동
  map.value.panTo(position);
}

watch((selectedAttraction), (newAttraction) => {
  const { latitude, longitude } = newAttraction;
  addMarker(latitude, longitude);
});

onMounted(async () => {
  try {
    await loadScript();
    await new Promise((resolve) => {
      kakao.maps.load(() => {
        resolve();
      });
    });
    loadMap();
  } catch (error) {
    console.error('Failed to load Kakao Map API:', error);
  }
});
</script>

<template>
  <div id="map" style="width:100%;height:400px;" ref="mapContainer"></div>
</template>

<style scoped></style>
