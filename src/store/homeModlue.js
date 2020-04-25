const homeModule = {
  namespaced: true,
  state: {
    location: '四川成都',
    currentPosition: 0,
    isShowMask: false,
  },
  mutations: {
    changeLocation(state, newLocation) {
      state.location = newLocation;
    },
    changeCurrentPosition(state, newPosition) {
      state.currentPosition = newPosition;
    },
    changeMaskStatus(state, newStatus) {
      state.isShowMask = newStatus;
    },
  },
  actions: {},
  modules: {},
};
export default homeModule;
