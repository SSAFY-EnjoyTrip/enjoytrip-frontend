import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AttractionView from '../views/AttractionView.vue';
import PlanView from '../views/PlanView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import PlanDetailView from '../views/PlanDetailView.vue';
import MyPageView from '../views/MyPageView.vue';
import planRegistView from '../views/PlanRegistView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: AttractionView,
  },
  {
    path: '/plans',
    name: 'plans',
    component: PlanView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/plans/:planId',
    name: 'planDetail',
    component: PlanDetailView,
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView,
  },
  {
    path: '/plans/regist',
    name: 'planRegist',
    component: planRegistView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
