import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import store from "./utils/vuex_store/store";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: Header,
        default: Landing,
        footer: Footer
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: Header,
        default: Register,
        footer: Footer
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        header: Header,
        default: Dashboard,
        footer: Footer
      },
      meta: {
        requiresAuth: true
      }
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   console.log('from', from)
//   console.log('next', next)
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//     console.log('not')
//   //   if (store.state.user != null) {
//   //     next()
//   //   }
//   //   else {
//   //     next({name: 'landing'})
//   //   }
//   } else {
//     next('login')
//   }
// })

export default router;

