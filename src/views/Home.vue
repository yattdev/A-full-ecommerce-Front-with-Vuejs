<template>
  <div class="home">
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="card-header bg-primary text-white text-uppercase">
                        <i class="fa fa-star"></i> Last products
                    </div>
                    <div class="card-body">
                        <produits-list-component :propProduitsList="produitsList"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProduitsListComponent from '@/components/ProduitsListComponent.vue'; // @ is an alias to /src
import axios from "axios";

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            produitsList: {},
        }
    },

    components: {
        'produits-list-component': ProduitsListComponent,
    },

    mounted(){
        this.getProduitsList();
    },

    methods: {
        getProduitsList() {
            this.$store.commit('setIsLoading', true)
            axios
                .get('/produits/')
                .then(response => {
                        this.produitsList = response.data.results;
                        console.log(this.produitsList);
                })
                .catch(error => {
                    console.log(error)
                })
                document.title = "Liste des produits | APTUS"
            this.$store.commit('setIsLoading', false)
        },
    }
})
</script>
