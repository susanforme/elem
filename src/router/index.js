import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
