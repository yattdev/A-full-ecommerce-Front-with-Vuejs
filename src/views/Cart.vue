<template>
    <div class="page-cart">
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white text-uppercase">
                        <h2> Cart </h2>
                        </div>
                    </div>
                </div>
                <div class="table-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table class="table" hover v-if="cartTotalLength">
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
            }
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
        cartTotalLength(){
         return this.cart.items.reduce((acc, curV) => {
                     return acc += curV.quantity
             }, 0)
        },
    },

    methods: {
       /* Delete Item from cart */
       remove_item(item){
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
       }
    }
})
</script>
