<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

import { useMemberStore } from '@/stores/member';
import { useMenuStore } from '../stores/menu';

const router = useRouter();
const $q = useQuasar();

const memberStore = useMemberStore();
const menuStore = useMenuStore();

const { isLogin } = storeToRefs(memberStore);
const { userLogin, getUserInfo } = memberStore;

const { changeMenuState } = menuStore;

const loginUser = ref({
  email: 'ssafy@test.com',
  password: '1234',
});

const login = async () => {
  await userLogin(loginUser.value);
  let token = sessionStorage.getItem('accessToken');

  if (isLogin.value) {
    changeMenuState();
    getUserInfo(token, loginUser.value.email);
    $q.notify({
      type: 'positive',
      message: '로그인에 성공하였습니다.',
      color: 'primary',
      timeout: 1000,
    });
    router.push('/');
  }
};
</script>

<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row flex-center">
        <h5 class="text-h4 text-black q-my-xl">Enjoy Trip</h5>
      </div>
      <div class="row">
        <q-card
          square
          bordered
          class="q-pa-lg shadow-1"
          style="width: 400px; max-width: 400px"
        >
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="loginUser.email"
                type="email"
                label="이메일"
              />
              <q-input
                square
                filled
                clearable
                v-model="loginUser.password"
                type="password"
                label="비밀번호"
                autocomplete="on"
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
              @click="login"
            />
          </q-card-actions>
        </q-card>
      </div>
      <div class="row flex-center q-my-lg">
        <q-tabs>
          <q-route-tab to="/signup">회원가입</q-route-tab>
        </q-tabs>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>