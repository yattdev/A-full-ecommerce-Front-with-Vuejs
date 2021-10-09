import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import ProduitDetails from "../views/ProduitDetails.vue";
import Categorie from "../views/Categorie.vue";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

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
    component: ProduitDetails
  },
  {
    path: "/categories/:id?",
    name: "Categorie",
    component: Categorie
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
