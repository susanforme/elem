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
    name: 'User',
    component: () => import('@/views/User'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'linkActiveClass',
});

export default router;
