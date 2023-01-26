// src/router/index.js

/* eslint-disable */ 
import Vue from "vue";
import  VueRouter  from "vue-router"
import createRouter from "vue-router"
import createWebHistory from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Reset from "../views/Reset.vue"
import SignUp from "../views/signup.vue"
import Dashboard from "../views/Dashboard.vue"
import Userfront from "@userfront/vue"

import CreateEvent from '../views/CreateEvent.vue'
import allEvents from '../views/allEvents.vue'
import HomeScreen from '../views/HomeScreen.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeScreen,
},
{
  path: '/createevent',
  name: 'createEvent',
  component: CreateEvent,
},  
{
  path: '/allEvents',
  name: 'allEvents',
  component: allEvents,
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
  //alert("Logged in: "+isLoggedIn+"  To: "+to.name+" From: "+from.name+" Next: "+next.name+ "  Login: "+ (to.name === "Login")+ "   SignUp: "+ (to.name === "signUp")+ "  Logged in: "+(!isLoggedIn))
  
  //return next({ path: "/allEvents" });
  if (to.name === "SignUp" && !isLoggedIn) {
    //    alert("SIGNUP!!")
        next() //return next({ path: "/signUp" });
      }
      else
      if (to.name !== "Login" && !isLoggedIn) {
      //  alert("LOGIN!!")
        return next({ path: "/login" });
      }
      else {
        next();
  }
});

export default router;