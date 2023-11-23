<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { useMemberStore } from '@/stores/member';
import PlanCard from '@/components/Plan/PlanCard.vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const memberStore = useMemberStore();
const { isLogin, userInfo } = storeToRefs(memberStore);
const userId = userInfo.value?.id;

const slide = ref(1); // 현재 슬라이드의 인덱스를 저장할 변수

const getMyPlan = async () => {
  const res = await axios.get(`${BASE_URL}/plans/myplan/${userId}`);
  console.log('MyPlan', res.data);
};

const getHotPlan = async () => {
  const res = await axios.get(`${BASE_URL}/plans/hotplan`);
  console.log('HotPlan', res.data);
};

onMounted(() => {
  scrollSection();
  // getMyPlan(userId);
  // getBookmark(userId);
  getHotPlan();
});

function scrollSection() {
  const sections = document.querySelectorAll('.section');
  const sectionCount = sections.length;

  sections.forEach(function (section, index) {
    section.addEventListener('wheel', function (event) {
      event.preventDefault();
      const delta = event.deltaY;

      // wheel down : move to next section
      if (delta > 0) {
        if (index < sectionCount - 1) {
          sections[index + 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
      // wheel up : move to previous section
      else {
        if (index > 0) {
          sections[index - 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
</script>

<template>
  <div class="login-after" v-if="isLogin">
    <!-- my plan -->
    <div class="section my-plan">
      <div class="content-wrap">
        <div class="text-h4 q-mb-md">나의 여행</div>
        <div class="carousel-wrap">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            height="400px"
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <PlanCard class="col" v-for="n in 4" :key="n" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <PlanCard class="col" v-for="n in 4" :key="n" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <PlanCard class="col" v-for="n in 4" :key="n" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

    <!-- hot plan -->
    <div class="section hot-plan">
      <div class="content-wrap">
        <div class="text-h4 q-mb-md">인기 여행</div>
        <a href="#"></a>
        <div class="q-mb-lg">
          <div class="text-h6">Top Weekly</div>
          <div
            class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"
          >
            <q-card class="my-card" v-for="n in 5" :key="n">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
        <div class="q-mb-lg">
          <div class="text-h6">Top Monthly</div>
          <div
            class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"
          >
            <q-card class="my-card" v-for="n in 5" :key="n">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
        <div class="q-mb-lg">
          <div class="text-h6">Top Yearly</div>
          <div
            class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"
          >
            <q-card class="my-card" v-for="n in 5" :key="n">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="login-before">
    <div class="section main">
      <div class="video-container">
        <video autoplay loop muted class="video-element">
          <source src="@/assets/train.mp4" type="video/mp4" />
        </video>
        <div class="overlay"></div>
      </div>
      <div class="title-wrap">
        <div class="text-h1 title">EnjoyTrip</div>
        <div class="text-h5 sub-title">
          지도 위의 여정을 공유하고, 새로운 이야기를 전해보세요.
        </div>
      </div>
    </div>

    <!-- plan -->
    <div class="section plan">
      <div class="content-wrap">
        <img src="@/assets/plan.svg" />
        <div class="content">
          <div class="text-h4 q-mb-md">나만의 여행 계획</div>
          <p class="text-h6">
            방문할 관광지를 추가하며 나만의 일정을 계획하세요. <br />
            지도에서 관광지의 위치를 한눈에 확인하고, 손쉽게 일정을 <br />
            관리할 수 있어요.
          </p>
        </div>
      </div>
    </div>

    <!-- hot place -->
    <div class="section hot-place">
      <div class="content-wrap">
        <div class="text-h4 q-mb-md">인기 여행 계획</div>
        <p class="text-h6 desc">
          기간별 인기 여행 계획을 살펴보세요. 다른 여행자들과 아이디어를 나누며
          <br />한국의 숨은 관광지를 발견하고 새로운 경험과 추억을 만들어보세요.
        </p>
        <div class="row">
          <PlanCard class="col" v-for="n in 5" :key="n" />
        </div>
      </div>
    </div>

    <!-- join us -->
    <div class="section join-us">
      <div class="content-wrap">
        <img src="@/assets/transport-scene.svg" class="transport-scene" />
        <div class="content">
          <div class="text-h5 q-mb-md title">
            새로운 여정을 시작할 준비가 되셨나요? <br />
            <b>EnjoyTrip</b>과 함께 새로운 방법을 경험하세요!
          </div>
          <q-btn color="primary" label="Start Planning" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition-duration: 0.8s;
}
body {
  margin: 0;
  padding: 0;
}
div.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.section.main {
  display: block;
  position: relative;
}

.section.main .title-wrap {
  position: absolute;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.section.main .title-wrap .title {
  font-weight: bold;
  margin-bottom: 60px;
  font-size: 4.5rem;
}

.section.main .title-wrap .sub-title {
  line-height: 2.5rem;
}

.video-container {
  position: relative;
  height: 100vh;
}

.video-element {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.section .content-wrap {
  width: 1200px;
  height: 500px;
  display: flex;
  padding: 50px;
}

.section.plan .content-wrap {
  align-items: center;
}

.section .content {
  width: 600px;
}

.section img {
  width: 400px;
  margin: 0 auto;
}

.section.hot-place .content-wrap {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section.hot-place .desc {
  width: 800px;
}

.section .carousel-wrap {
  width: 100%;
}

.section.my-plan .content-wrap {
  flex-direction: column;
}

.section.hot-plan {
  /* background-color: rgb(105, 105, 255); */
}

.section.hot-plan .content-wrap {
  flex-direction: column;
  height: 700px;
  /* background-color: rgb(170, 249, 249); */
}

.section.join-us {
  background-color: #e0f4ff;
}

.section.join-us .content-wrap {
  /* opacity: 0; */
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
}

.section.join-us img {
  width: 400px;
}

.section.join-us .content {
  width: 500px;
}
.section.join-us .content .title {
  line-height: 40px;
  margin-bottom: 20px;
}

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
