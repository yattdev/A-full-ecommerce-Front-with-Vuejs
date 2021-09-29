import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      items: []
    },
    isAuthenticated: false,
    token: "",
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart") || "{}");
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    addToCard(state: any, item: any) {
      // test if produit does'nt exist in cart
      const exist = state.cart.items.filter(
        (i: any) => i["produit"]["id"] === item.quantity.id
      );

      if (exist.length) {
        // increment item quantity value when (it exist in cart)=length>0
        exist[0]["quantity"] =
          parseInt(exist[0]["quantity"]) + parseInt(item.quantity);
      } else {
        state.cart.items.push(item); // push item in if not exist
      }

      // Refresh localStorage cart value
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setIsLoading(state, status) {
      state.isLoading = status;
    }
  },
  actions: {},
  modules: {}
});
