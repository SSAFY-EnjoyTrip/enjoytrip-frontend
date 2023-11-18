<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<template>
  <q-page
    class="row justify-center items-center"
  >
    <div class="column">
      <div class="row flex-center">
        <h5 class="text-h4 text-black q-my-xl">Enjoy Trip</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1" style="width: 400px; max-width: 400px">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="이메일"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="비밀번호"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="로그인"
            />
          </q-card-actions>
        </q-card>
      </div>
      <div class="row flex-center q-my-lg">
        <q-tabs>
          <q-route-tab to="">비밀번호 찾기</q-route-tab>
          <span>|</span>
          <q-route-tab to="">회원가입</q-route-tab>
        </q-tabs>
        
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
