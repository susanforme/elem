const homeModule = {
  namespaced: true,
  state: {
    location: '四川成都',
    currentPosition: 0,
    isShowMask: false,
    homeData: {
      foodtrys: [],
      activity: {},
      shopList: [],
    },
    searchData: {
      searchList: [],
    },
    detailData: {
      detailList: [],
    },
    recomList: [],
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
      state.homeData.foodtrys = initData;
    },
    initactivity(state, initData) {
      state.homeData.activity = initData;
    },
    pushShopList(state, initData) {
      state.homeData.shopList.push(...initData);
    },
  },
  actions: {
    changeDataStatus({ commit }, status) {
      commit('changeDataStatus', status);
    },
    initFoodtrys({ commit }, initData) {
      commit('initFoodtrys', initData);
    },
    initactivity({ commit }, initData) {
      commit('initactivity', initData);
    },
    pushShopList({ commit }, initData) {
      commit('pushShopList', initData);
    },
  },
  modules: {},
};
export default homeModule;
