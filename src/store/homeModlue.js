const homeModule = {
  namespaced: true,
  state: {
    location: '四川成都',
    currentPosition: 0,
    isShowMask: false,
    data: {
      foodtrys: [],
      activities: [],
      shopList: [],
      detail: {},
      recomList: [],
    },
    status: 404,
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
    changeDataStatus(state, newStatus) {
      state.status = newStatus;
    },
    initFoodtrys(state, initData) {
      state.data.foodtrys = initData;
    },
    initActivities(state, initData) {
      state.data.activities = initData;
    },
    pushShopList(state, initData) {
      state.data.shopList.push(...initData);
    },
  },
  actions: {
    changeDataStatus({ commit }, status) {
      commit('changeDataStatus', status);
    },
    initFoodtrys({ commit }, initData) {
      commit('initFoodtrys', initData);
    },
    initActivities({ commit }, initData) {
      commit('initActivities', initData);
    },
    pushShopList({ commit }, initData) {
      commit('pushShopList', initData);
    },
  },
  modules: {},
};
export default homeModule;
