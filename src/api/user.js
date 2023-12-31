import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function userConfirm(param, success, fail) {
  console.log('param', param);
  await local.post(`/users/login`, param).then(success).catch(fail);
  console.log('userConfirm ok');
}

async function findByEmail(email, success, fail) {
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
    console.log(`=====================${email}======================`);
  await local.get(`/users/info/${email}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers['refreshToken'] =
    sessionStorage.getItem('refreshToken'); //axios header에 refresh-token 셋팅
  await local.post(`/users/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await local.get(`/users/logout/${userid}`).then(success).catch(fail);
}

export { userConfirm, findByEmail, tokenRegeneration, logout };