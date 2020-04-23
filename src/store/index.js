import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    location: '四川成都',
    currentPosition: 0,
  },
  mutations: {
    changeLocation(state, newLocation) {
      state.location = newLocation;
    },
    changeCurrentPosition(state, newPosition) {
      state.currentPosition = newPosition;
    },
  },
  actions: {},
  modules: {},
});
