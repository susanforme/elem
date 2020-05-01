const detail = {
  namespaced: true,
  state: {
    menu: [],
    rst: {},
    status: 404,
  },
  mutations: {
    initMenu(state, data) {
      state.menu = data;
    },
    initRst(state, data) {
      state.rst = data;
    },
    changeStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    initMenu({ commit }, payload) {
      commit('initMenu', payload);
    },
    initRst({ commit }, payload) {
      commit('initRst', payload);
    },
    changeStatus({ commit }, payload) {
      commit('changeStatus', payload);
    },
  },
};

export default detail;
