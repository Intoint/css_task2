/* eslint-disable */ 
import Vue from "vue";
import  VueRouter  from "vue-router"
import createRouter from "vue-router"
import createWebHistory from "vue-router"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"
import Reset from "../views/Reset.vue"
import SignUp from "../views/signup.vue"
import Dashboard from "../views/Dashboard.vue"
import Userfront from "@userfront/vue"
import CreateEvent from '../views/CreateEvent.vue'
import viewProfile from '../views/ViewProfile.vue'
import allEvents from '../views/allEvents.vue'
import HomeScreen from '../views/HomeScreen.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: '/viewProfile',
    name: 'viewProfile',
    component: viewProfile,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeScreen,
  },
  {
    path: '/allEvents',
    name: 'allEvents',
    component: allEvents,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // If the user is not logged in, redirect to /login
  const isLoggedIn = !!Userfront.tokens.accessToken;
  if (to.name === "SignUp" && !isLoggedIn) {        // OK to sign up if not logged in
        next() //return next({ path: "/signUp" });
      }
      else
      if (to.name !== "Login" && !isLoggedIn) {     // for all other paths call login if not logged in
        return next({ path: "/login" });
      }
      else {                                        // logged in, so OK to proceed
        next();
  }
});

export default router;