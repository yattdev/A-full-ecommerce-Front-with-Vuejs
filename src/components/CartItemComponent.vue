<template>
        <tr class="cart-item-component">
            <td>
                <router-link to="item.produit.id">{{ item.produit.nom_produit }}</router-link>
            </td>
            <td>{{ item.produit.prix_produit }}</td>
            <td>
                <b-form-input id="type-number" type="number"
                v-model="item.quantity" placeholder="Quantité"
                min="1" max="100"
                v-on:change="$emit('update_quantity', item)">
                </b-form-input>
            </td>
            <td>${{ getItemTotal(item).toFixed(2) }}</td>
            <td><b-button variant="danger" v-on:click="$emit('delete_btn_clicked', item)">Delete</b-button></td>
        </tr>
</template>

<script >
import Vue from 'vue'
export default Vue.extend({
    props: ['initialItem'],
    name: 'CartItemComponent',
    data(){
        return {
            /* item: this.initialItem, */
        }
    },

    computed:{
        item: function(){
            return this.initialItem
        }
    },

    methods: {
        getItemTotal(item){
            return item.quantity * item.produit.prix_produit
        },

    },
})
</script>
