import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/AuthenticationFlow/SignIn";
import Recover from "../views/AuthenticationFlow/Recover";
import Request from "../views/AuthenticationFlow/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/team",
    name: "team",
    component: Team,
  },

  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
