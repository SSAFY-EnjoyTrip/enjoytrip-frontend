<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

import { httpStatusCode } from '../util/http-status';
import router from '../router';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const form = ref(null);

const email = ref('');
const name = ref('');
const nickname = ref('');
const password = ref('');
const passwordCheck = ref('');

const checkDuplicateEmail = async () => {
  const res = await axios.get(`${BASE_URL}/users/check/email/${email.value}`);
  const status = res.status;

  if (status === httpStatusCode.NOCONTENT) {
    alert('사용가능한 이메일입니다.');
  } else if (status === httpStatusCode.OK) {
    alert('중복된 이메일입니다.');
  }
};

const checkDuplicateNickname = async () => {
  const res = await axios.get(
    `${BASE_URL}/users/check/nickname/${nickname.value}`
  );
  const status = res.status;

  if (status === httpStatusCode.NOCONTENT) {
    alert('사용가능한 닉네임입니다.');
  } else if (status === httpStatusCode.OK) {
    alert('중복된 닉네임입니다.');
  }
};

const doubleCheck = computed(() => {
  const different = '비밀번호가 다릅니다.';

  return password.value === passwordCheck.value ? '' : different;
});

const onSubmit = async (e) => {
  console.log(e);

  let isFormValid = await form.value.validate();

  if (isFormValid && doubleCheck) {
    const res = await axios.post(`${BASE_URL}/users/signup`, {
      email: email.value,
      password: password.value,
      name: name.value,
      nickname: nickname.value,
    });
    const data = await res.data;

    console.log(data);

    router.push({ name: 'login' });
  }
  else {
    console.log('유효성 실패');
  }

  // e.target.submit();
};
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
            <q-form
              class="q-gutter-md"
              @submit.prevent="onSubmit"
              :greedy="true"
              ref="form"
            >
              <div class="row justify-between">
                <q-input
                  class="col-9"
                  square
                  filled
                  clearable
                  v-model="email"
                  type="email"
                  label="이메일"
                  :rules="[(val) => !!val || '이메일을 입력해주세요.']"
                />
                <q-btn
                  unelevated
                  color="grey"
                  size="md"
                  label="중복확인"
                  @click="checkDuplicateEmail"
                />
              </div>

              <q-input
                square
                filled
                clearable
                v-model="name"
                type="text"
                label="이름"
                :rules="[(val) => !!val || '이름을 입력해주세요.']"
              />
              <div class="row justify-between">
                <q-input
                  square
                  filled
                  clearable
                  v-model="nickname"
                  type="text"
                  label="닉네임"
                  class="col-9"
                  :rules="[(val) => !!val || '닉네임을 입력해주세요.']"
                />
                <q-btn
                  unelevated
                  color="grey"
                  size="md"
                  label="중복확인"
                  @click="checkDuplicateNickname"
                />
              </div>

              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="비밀번호"
                :rules="[(val) => !!val || '비밀번호를 입력해주세요.']"
              />

              <q-input
                square
                filled
                clearable
                v-model="passwordCheck"
                type="password"
                label="비밀번호 확인"
              />
              <div class="double-check">{{ doubleCheck }}</div>
              <q-card-actions>
                <q-btn
                  unelevated
                  color="primary"
                  size="lg"
                  class="full-width"
                  label="회원가입"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.double-check {
  color: red;
  font-size: 12px;
}
</style>
