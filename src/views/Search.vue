<template>
    <div class="Search">
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white text-uppercase">
                            <h2 class="is-size-5 has-text-grey mx-auto">
                                Search term: "{{query}}"
                            </h2>
                        </div>
                        <div class="card-body">
                            <ProduitsListComponent :propProduitsList="produitsList"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import ProduitsListComponent from '../components/ProduitsListComponent.vue';

export default Vue.extend({
    name: 'Search',
    data() {
        return {
            produitsList: {},
            query: '',
        }
    },

    components: {
        ProduitsListComponent,
    },

    mounted() {
        document.title = "Search | Produits"
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if(params.get('query')){
            this.query = params.get('query')

            this.performSearch()
        }
    },

    methods: {
        async performSearch(){
            this.$store.commit('setIsLoading', true)
            await axios
                .post('/produits/search/', {'query': this.query})
                .then(response => {
                        this.produitsList = response.data
                        console.log(this.produitsList)
                })
                .catch(error => {
                        console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        }
    }
})
</script>
