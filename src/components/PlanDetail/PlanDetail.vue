<script setup>
import PlanDetailList from './PlanDetailList.vue';
</script>

<template>
  <div style="overflow: auto; max-height: 100vh">
    <q-card class="plan-img">
      <q-icon
          name="bookmark_border"
          class="text-h4 bookmark absolute-top-right z-top"
        />
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="text-h5 absolute-bottom text-left">Title</div>
      </q-img>
    </q-card>

    <div class="main q-pa-lg">
      <div class="header row">
        <q-avatar size="80px" class="q-mr-md">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="q-mr-xl">
          <div class="name text-h5">김민준</div>
          <div class="date text-h6">2023년 11월 19일</div>
        </div>
        <div class="infos col-2 row justify-between">
          <div>
            <q-icon
              name="favorite_border"
              size="20px"
              color="red"
              class="q-mr-xs"
            />
            <span class="like-count">999</span>
          </div>
          <div>
            <q-icon
              name="chat_bubble_outline"
              size="20px"
              color="blue"
              class="q-mr-xs"
            />
            <span class="like-count">999</span>
          </div>
        </div>
        <q-space />
        <div>
          <q-btn>Follow</q-btn>
        </div>
      </div>
      <q-separator class="q-my-lg" />
      <p class="text-h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero
        accusantium reiciendis exercitationem ex aliquid dolores porro
        reprehenderit ratione obcaecati dolore ipsa quam, eos earum nam veniam
        delectus maiores in!
      </p>
      <PlanDetailList />
    </div>
  </div>
</template>

<style scoped>
.q-img {
  max-height: 250px;
  background-color: grey;
}
.header {
  display: flex;
  align-items: center;
}
.bookmark:hover {
  color: white;
  cursor: pointer;
}
</style>
