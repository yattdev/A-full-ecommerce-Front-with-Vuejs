<template>
    <div class="page-cart">
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-header bg-info text-white text-uppercase">
                        <h2> Cart </h2>
                        </div>
                    </div>
                </div>
                <div class="table-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table class="table bg-gray" hover v-if="cartTotalLength">
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <cartItemComponent v-on:delete_btn_clicked="remove_item" v-on:update_quantity="update_cart"
                            v-for="item in cart.items"
                            v-bind:key="item.id"
                            :initialItem="item"/>
                        </tbody>
                    </table>
                    <p v-else class="mx-auto bg-info"> Vous n'avez aucun produit danc votre panier...</p>
                </div>
                <div class="col-md-12">
                    <h2 class="subtitle">Summary</h2>

                    <strong>${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

                    <hr>

                    <div class="mb-4">
                        <a md="3" v-on:click="is_connected">
                            <b-button v-b-hover="handleHover" size="lg" class="btn btn-lg" :variant="isHovered ? 'green' : 'dark'">Commander</b-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
/* import axios from 'axios' */
import CartItemComponent from '../components/CartItemComponent.vue'
export default Vue.extend({
    name: 'Cart',
    data() {
        return {
            cart: {
                items: [],
            },
            isHovered: false // for command button
        }
    },

    components: {
        CartItemComponent,
    },

    mounted() {
        this.cart.items = JSON.parse(JSON.stringify(this.$store.state.cart.items))
         /* this.cart.items.forEach(elt => console.log(elt.quantity)) */
    },

    computed: {
        // Calcul Total price of card
        cartTotalLength(){
         return this.cart.items.reduce((acc, curV) => {
                     return acc += curV.quantity
             }, 0)
        },

        // Calcul Total price of card
        cartTotalPrice(){
         return this.cart.items.reduce((acc, curV) => {
                     return acc += curV.produit.prix_produit * curV.quantity
             }, 0)
        },
    },

    methods: {
        handleHover(hovered) {
            this.isHovered = hovered
        },
       /* Delete Item from cart */
       remove_item(item){
            console.log(item)
            this.$store.commit('removeFromCart', item)
            this.cart.items.forEach(elt => console.log(elt.quantity))
            // Update cart
            this.cart = JSON.parse(JSON.stringify(this.$store.state.cart))
        },

       /* update produit quantity from cart  */
       update_cart(item){
            this.$store.commit('setItemQte', item)
            // Update cart
            this.cart = JSON.parse(JSON.stringify(this.$store.state.cart))
       },

       is_connected(){
            if(this.$store.state.isAuthenticated){
                this.$router.push("/cart/checkout")
            }
            else {
                this.$router.push("/login")
            }
       }
    }
})
</script>
