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
    // Initialize produit cart value
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart") || "{}");
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      // Authen token verification
      if (localStorage.getItem("token")) {
        state.token = JSON.stringify(localStorage.getItem("token"));
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.isAuthenticated = false;
      }
    },

    // test if produit exist in cart
    isItemInCart(state: any, item: any) {
      var exist = state.cart.items.filter(
        (i: any) => i["produit"]["id"] === item.quantity.id
      );

      return exist;
    },

    // Add item to cart, when user click on 'Add to cart'
    addToCard(state: any, item: any) {
      // test if produit does'nt exist in cart
      const exist = state.cart.items.filter(
        (i: any) => i["produit"]["id"] === item.produit.id
      );

      if (exist.length) {
        // increment item quantity value when (it exist in cart)=length>0
        state.cart.items.forEach((elt: any) =>
          console.log("Avant: " + elt.quantity)
        );
        exist[0]["quantity"] =
          parseInt(exist[0]["quantity"]) + parseInt(item.quantity);
        state.cart.items.forEach((elt: any) =>
          console.log("apres: " + elt.quantity)
        );
      } else {
        state.cart.items.push(item); // push item in if not exist
      }

      // Refresh localStorage cart value
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // Remove Item from Cart
    removeFromCart(state: any, item: any) {
      const exist = state.cart.items.filter(
        (i: any) => i["produit"]["id"] === item.produit.id
      );

      if (exist[0]["quantity"] === 1) {
        // delete item from cart
      } else if (exist[0]["quantity"] > 1) {
        // state.cart.items.forEach((elt: any) =>
        // console.log("Avant: " + elt.quantity)
        // );
        exist[0]["quantity"] = parseInt(exist[0]["quantity"]) - 1;
      }

      // Refresh localStorage cart value
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // update Item quantity from cart
    setItemQte(state: any, item: any) {
      const exist = state.cart.items.filter(
        (i: any) => i["produit"]["id"] === item.produit.id
      );

      if (exist.length) {
        exist[0]["quantity"] = parseInt(item.quantity);
      }

      // Refresh localStorage cart value
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // Toggle loading feature
    setIsLoading(state, status) {
      state.isLoading = status;
    },

    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },

    removeToken(state) {
      state.token = "";
      state.isAuthenticated = false;
    }
  },
  actions: {},
  modules: {}
});
