<template>
    <div id="ProduitsListComponent" class="row">
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch my-md-2 my-ml-2"
        v-for="produit in produits"
        v-bind:key="produit.reference_produit">
        <div class="course-item bg-white">
          <div class="py-ml-3 py-md-2 bg-black">
              <img :src="produit.thumbnail" class="img-fluid" alt="...">
          </div>
          <div class="course-content my-4 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <router-link :to="'/produits/'+produit.id" class="text-decoration-none"><h4>{{ produit.nom_produit.substring(0,20)+"..." }}</h4></router-link>
            </div>
              <p class="price">{{ produit.prix_produit }}$</p>
            <p v-html="produit.description_produit.substring(0,100)+'...'" class="card-text">{{ produit.description_produit.substring(0,50)+"..." }}</p>
            <div class="trainer d-flex justify-content-between align-items-center">
              <div class="trainer-profile mb-2 d-flex align-items-center btn btn-success btn-block" @click="addToCard(produit)">
                Add to cart
              </div>
              <div class="trainer-rank d-flex align-items-center">
                <i class="bx bx-user"></i>&nbsp;35
                &nbsp;&nbsp;
                <i class="bx bx-heart"></i>&nbsp;42
              </div>
            </div>
          </div>
        </div>
      </div> <!-- End Course Item-->
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
