import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Calculator from "./pages/Calculator";

Vue.use(VueRouter);

const routes = [
  { path: "/",name: 'home', component: Home },
  { path: "/add:id?", name: 'add',component: Add },
  { path: "/calculator:id?", name: 'calculator',component: Calculator },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router