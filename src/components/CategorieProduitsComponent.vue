<template>
    <div class="col">
        <div class="row" id="CategorieProduitsList">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
            v-for="produit in getCategorieProduits"
            v-bind:key="produit.id">
                <div class="card">
                    <img class="card-img-top" :src="produit.thumbnail" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title"><router-link :to="'/produits/'+produit.id" title="View Product">{{ produit.nom_produit.substring(0, 30) + "..." }}</router-link></h4>
                        <p v-html="produit.description_produit.substring(0,50)+'...'" class="card-text">{{ produit.description_produit.substring(0,50)+"..." }}</p>
                        <div class="">
                            <span class="btn btn-primary btn-sm px-3">{{ produit.prix_produit }}</span>
                            <span class="btn btn-success btn-sm px-3" @click="addToCard(produit)">Add to cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-auto mt-5">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="CategorieProduitsList"
            align="center"
          ></b-pagination>
        </div>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>


</template>

<script charset="utf-8">
import { Vue } from 'vue-property-decorator';

export default Vue.component('CategorieProduits', {
    props: ['categorieProduits'],
    name: 'CategorieProduits',
    data() {
        return {
            isLoading: Boolean, // For loading feature
            currentPage: 1,
            perPage: 2,
            /* items: this.categorieProduits, */
        }
    },

    computed: {
        rows() {
        return Object.values(this.categorieProduits).length
        },

        getCategorieProduits: function() {
            return Object.values(this.categorieProduits).slice(
              (this.currentPage - 1) * this.perPage,
              this.currentPage * this.perPage,
            )
        }
    },

    methods: {
        addToCard(produit) {
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

})
</script>
