import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';

Vue.use(Vuex);

export default new Vuex.Store({
  //个人信息
  state: {
    uesrMsg: {
      isLogin: false,
      userName: '',
      shippingAddress: {
        address: '',
        phoneNum: '',
        name: '',
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
