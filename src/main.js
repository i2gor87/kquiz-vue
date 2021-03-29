/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import firebase from "firebase/app";
import store from "./utils/vuex_store/store";

const firebaseConfig = {
  apiKey: 'AIzaSyDsHv5nlWU2rnNl29HLVL6rVmrVUwbYIgo',
  authDomain: 'kquiz-bee75.firebaseapp.com',
  databaseURL: 'https://kquiz-bee75-default-rtdb.firebaseio.com/',
  projectId: 'kquiz-bee75',
  storageBucket: 'kquiz-bee75.appspot.com',
  messagingSenderId: '899017681308',
  appId: '1:899017681308:web:123d878e99f2e772578059',
  measurementId: 'G-M59WF0GVNG'
}
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false;
Vue.use(Argon);

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});


