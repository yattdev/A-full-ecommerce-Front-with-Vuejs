import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ProduitDetail from "../components/ProduitDetail.vue";
import CategorieList from "../components/CategorieList.vue";
import TreeMenu from "../components/TreeMenu.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/produits/:id",
    name: "Produit",
    component: ProduitDetail
  },
  {
    path: "/categories/",
    name: "CategorieList",
    component: CategorieList
  },
  {
    path: "/treemenu/",
    name: "TreeMenu",
    component: TreeMenu
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
