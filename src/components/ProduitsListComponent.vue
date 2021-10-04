<template>
    <div class="ProduitsListComponent row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"
        v-for="produit in produits"
        v-bind:key="produit.reference_produit">
            <div class="card">
                <img class="card-img-top image" :src="produit.thumbnail" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">
                        <router-link :to="produit.absolute_url" title="View Product">{{ produit.nom_produit.substring(0,10)+"..." }}</router-link>
                    </h4>
                    <p class="card-text">{{ produit.description_produit.substring(0,50)+"..." }}</p>
                    <div class="row inline">
                        <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 btn btn-danger btn-block price">
                            {{ produit.prix_produit}}$
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 btn btn-success btn-block"
                        @click="addToCard(produit)">
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
/* import axios from "axios" */

export default Vue.component('ProduitsListComponent', {
    props: ['propProduitsList'],
    name: 'ProduitsListComponent',
    data() {
        return {
        };
    },

    computed: {
        produits: function() {
            return this.propProduitsList
        }
    },

    methods: {
        addToCard(produit: {}) {
            const item = {
                produit: produit, // {'produit':{}, quantity:value}
                quantity: 1,
            }

            this.$store.commit('addToCard', item)
            /* this.makeToast(false) */
            this.$bvToast.toast(
              'Produit à bien été ajouter au panier',
              {
                  title: 'BootstrapVue Toast',
                  noCloseButton: true,
                  autoHideDelay: 5000,
                  variant: 'success',
                  /* appendToast: append, */
                  autoHide: true
              }
            );
        }
    }

});
</script>

<style type="text/css" media="all">
    .image{
        margin-top: 1.25em;
        margin-right: 1.25em;
        margin-left: 1.25em;
        margin-bottom: 1.25em;
    }
    .card-text{
        text-align: justify;
        font-size: small;
    }
    .price{
        font-size: large;
    }
</style>
