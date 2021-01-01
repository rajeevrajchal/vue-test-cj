import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import landing from "@/module/landing/services/landing";
export const store = new Vuex.Store({
    modules: {
        landing
    }
})