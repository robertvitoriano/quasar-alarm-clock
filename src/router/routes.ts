import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Alarm.vue') }],
  },
  {
    path: '/alarm',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Alarm.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
