import Vue from 'vue';
import Vuex from 'vuex';
import gods from './modules/gods';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      gods
  }
});