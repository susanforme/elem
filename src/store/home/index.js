import recommend from './recommend';
import search from './search';
import home from './home';
import location from './location';

const homeModule = {
  namespaced: true,
  state: {
    myLocation: '四川成都',
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
  modules: {
    recommend,
    search,
    home,
    location,
  },
};
export default homeModule;
