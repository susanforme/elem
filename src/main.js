import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import animated from 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCompass,
  faCookie,
  faFileAlt,
  faUser,
  faMapMarkerAlt,
  faAngleDown,
  faAngleLeft,
  faFilter,
  faStar,
  faSpinner,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCookie,
  faCompass,
  faFileAlt,
  faUser,
  faMapMarkerAlt,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faFilter,
  faStar,
  faSpinner
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(animated);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
