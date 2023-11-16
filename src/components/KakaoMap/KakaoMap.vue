<script setup>
import { onMounted } from 'vue';

const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;

const { attraction } = history.state;

let map = null;

const loadMap = () => {
  const container = document.querySelector('#map');
  const options = {
    center: new window.kakao.maps.LatLng(37.541, 126.986),
    level: 9,
  };

  map = new window.kakao.maps.Map(container, options);
};

const loadScript = () => {
  const script = document.createElement('script');

  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`;
  script.onload = () => window.kakao.maps.load(loadMap);

  document.head.appendChild(script);
};

const addMarker = () => {
  if(attraction) {
    const lat = attraction.latitude;
    const lng = attraction.longitude;

    const markerPosition = new window.kakao.maps.LatLng(lat, lng);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
    map.setCenter(markerPosition);
  }
}

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    console.log('mounted');
    loadMap();
    addMarker();
  } else {
    loadScript();
  }
});
</script>

<template>
  <div id="map" style="width:100%;height:400px;"></div>
</template>

<style scoped></style>
