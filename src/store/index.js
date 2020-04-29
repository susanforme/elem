import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';

Vue.use(Vuex);

export default new Vuex.Store({
  //个人信息
  state: {
    isLogin: false,
    userName: '',
    phoneNum: '',
    address: '',
    name: '',
  },
  mutations: {
    loginMsg(state, data) {
      const { user, name } = data;
      state.userName = user;
      state.name = name;
    },
    changeLoginStatus(state, status) {
      state.isLogin = status;
    },
  },
  actions: {
    loginMsg({ commit }, data) {
      commit('loginMsg', data);
    },
    changeLoginStatus({ commit }, status) {
      commit('changeLoginStatus', status);
    },
  },
  modules: {
    home,
  },
});
