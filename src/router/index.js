import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createpost",
    name: "CreatePost",
    component: () =>
      import("../views/CreatePost.vue"),
  },
  {
    path: "/viewuserpost",
    name: "ViewUserpost",
    component: () =>
      import("../views/ViewUserpost.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
