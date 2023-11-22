<script setup>
import { ref, inject, onMounted, watch } from 'vue';

const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
const mapContainer = ref(null);
const map = ref(null);
const marker = ref(null);
const markers = ref([]);

const selectedAttraction = inject('selectedAttraction');
const attractionList = inject('attractionList');

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
    center: new kakao.maps.LatLng(36.6424341, 127.4890319),
    level: 12,
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

const deleteMarkers = () => {
  if(markers.value.length <= 0) {
    return;
  }

  markers.value.forEach((marker) => {
    marker.setMap(null);
  });

  markers.value = [];
};

const addMarkers = () => {
  if(attractionList.value.length <= 0) {
    return;
  }

  attractionList.value.forEach((attraction) => {
    const { latitude, longitude, title } = attraction;
    const position = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
      position,
      title,
    });

    kakao.maps.event.addListener(marker, 'click', () => map.value.panTo(position));
    markers.value.push(marker);
  });
};

const setMarkers = () => {
  markers.value.forEach((marker) => {
    marker.setMap(map.value);
  });
};

watch((selectedAttraction), (newAttraction) => {
  const { latitude, longitude } = newAttraction;
  addMarker(latitude, longitude);
});

watch((attractionList), () => {
  deleteMarkers();
  addMarkers();
  setMarkers();

  console.log('markers after watch: ', markers.value);
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
