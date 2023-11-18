import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AttractionView from '../views/AttractionView.vue';
import PlanView from '../views/PlanView.vue';
import LoginView from '../views/LoginView.vue';

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
