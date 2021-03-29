import firebase from "firebase/app"
import { resolve } from "q";
require('firebase/auth')
import router from "../../starterRouter";

const actions = {
    signUpAction({ commit }, payload) {
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            commit("setUser", response.user);
            router.replace("dashboard");
        })
        .catch(error => {
            commit("setError", error.message);
        });
      },
    signInAction({ commit }, payload) {
        firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            commit("setUser", response.user);
            router.replace("dashboard");
            resolve()
        })
        .catch(error => {
            commit("setError", error.message);
        });
    },
    signOutAction({commit}) {
        firebase
        .auth()
        .signOut()
        .then(() => {
            commit("setUser", null);
            router.replace("/")
        })
        .catch(error => {
            commit("setError", error.message);
        });
      }
};

export default actions;