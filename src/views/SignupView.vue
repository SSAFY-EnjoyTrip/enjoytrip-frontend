<script setup>
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const nickname = ref('');
const password = ref('');
const passwordCheck = ref('');
</script>

<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row flex-center">
        <h5 class="text-h4 text-black q-my-xl">회원가입</h5>
      </div>
      <div class="row">
        <q-card
          square
          bordered
          class="q-pa-lg shadow-1"
          style="width: 600px; max-width: 600px"
        >
          <q-card-section>
            <q-form class="q-gutter-md">
              <div class="row justify-between">
                <q-input
                  class="col-9"
                  square
                  filled
                  clearable
                  v-model="email"
                  type="email"
                  label="이메일"
                />
                <q-btn
                  unelevated
                  color="grey"
                  size="md"
                  label="중복확인"
                />
              </div>

              <q-input
                square
                filled
                clearable
                v-model="name"
                type="text"
                label="이름"
              />

              <q-input
                square
                filled
                clearable
                v-model="nickname"
                type="text"
                label="닉네임"
              />

              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="비밀번호"
              />

              <q-input
                square
                filled
                clearable
                v-model="passwordCheck"
                type="password"
                label="비밀번호 확인"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="회원가입"
            />
          </q-card-actions>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<style scoped></style>
