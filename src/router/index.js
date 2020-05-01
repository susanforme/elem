import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import homPage from '@/pages/home/home';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'homePage',
        component: homPage,
      },
      {
        path: 'location',
        name: 'location',
        component: () => import('@/pages/home/location'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/pages/home/search'),
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/pages/home/recommend'),
      },
    ],
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('@/views/Discover'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order'),
  },
  {
    path: '/user',
    component: () => import('@/views/User'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/user/user'),
      },
      {
        path: 'service',
        component: () => import('@/pages/user/service'),
      },
      {
        path: 'login',
        component: () => import('@/pages/user/login'),
      },
    ],
  },
  {
    path: '/detail',
    component: () => import('@/views/Detail'),
    children: [
      {
        path: '',
        component: () => import('@/pages/detail/detail'),
      },
      {
        path: 'check',
        component: () => import('@/pages/detail/check'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'linkActiveClass',
});

export default router;
