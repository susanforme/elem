const detail = {
  namespaced: true,
  state: {
    menu: [],
    rst: {},
    comments: {},
    status: 404,
  },
  mutations: {
    initMenu(state, data) {
      state.menu = data;
    },
    initRst(state, data) {
      state.rst = data;
    },
    initComments(state, data) {
      state.comments = data;
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
    initComments({ commit }, payload) {
      commit('initComments', payload);
    },
    changeStatus({ commit }, payload) {
      commit('changeStatus', payload);
    },
  },
};

export default detail;
