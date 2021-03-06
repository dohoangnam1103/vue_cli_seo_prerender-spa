import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { config } from "./config";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    config,
  },
});
