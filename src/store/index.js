import Vue from 'vue';
import Vuex from 'vuex';
import homeModule from './homeModlue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home: homeModule,
  },
});
