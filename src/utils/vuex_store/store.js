import Vue from 'vue'
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";
import Cookies, * as Cookie from "js-cookie";

Vue.use(Vuex)

const initialState = () => {
  if (Cookies.getJSON("user")) {
    return {user: Cookies.getJSON("user")}
  }
    return {user: null, error: null}
  }
  
const store = new Vuex.Store({
    plugins: [createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })],
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
})

export default store;