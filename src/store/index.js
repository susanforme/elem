import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import detail from './detail';

Vue.use(Vuex);

export default new Vuex.Store({
  //个人信息
  state: {
    isLogin: false,
    userName: '',
    phoneNum: '',
    //选择的地址
    address: '',
    name: '',
  },
  mutations: {
    loginMsg(state, data) {
      const { user, phoneNum } = data;
      state.userName = user;
      state.phoneNum = phoneNum;
    },
    changeLoginStatus(state, status) {
      state.isLogin = status;
    },
    changeAddress(state, location) {
      const { address, name } = location;
      state.address = address;
      state.name = name;
    },
    logOut(state) {
      state.isLogin = false;
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
    detail,
  },
});
