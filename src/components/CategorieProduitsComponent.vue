<template>
    <div class="col">
        <div class="row" id="CategorieProduitsList">
            <div class="col-12 col-md-6 col-lg-4"
            v-for="produit in getCategorieProduits"
            v-bind:key="produit.id">
                <div class="card">
                    <img class="card-img-top" :src="produit.thumbnail" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="row">
                            <div class="col">
                                <p class="btn btn-danger btn-block">99.00 $</p>
                            </div>
                            <div class="col">
                                <a href="#" class="btn btn-success btn-block">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-auto">
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

})
</script>
