<template>
    <div class="CategoryList">
        <div class="container">
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item" aria-current="page"
                            v-for="categorie in categorieList"
                            v-bind:key="categorie.id"
                            ><router-link to="/categorie.id"></router-link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-3">
                    <div class="card bg-light mb-3">
                        <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
                        <ul class="list-group category_block">
                            <li class="list-group-item"
                            v-for="categorie in categorieList"
                            v-bind:key="categorie.id">
                                  <tree-menu @clicked="getCategorieProduits"
                                     :nodes="categorie.enfants"
                                     :depth="0"
                                     :label="categorie.libelle"
                                     :id="categorie.id"
                                     ></tree-menu>
                            </li>
                        </ul>
                    </div>
                    <div class="card bg-light mb-3">
                        <div class="card-header bg-success text-white text-uppercase">Last product</div>
                        <div class="card-body">
                            <img class="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" />
                            <h5 class="card-title">Product title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="bloc_left_price">99.00 $</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <categorie-produits
                        :categorieProduits="categorieProduits"></categorie-produits>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script charset="utf-8" lang="ts">
import { Vue } from 'vue-property-decorator';
import axios from "axios";
import TreeMenuComponent from "./TreeMenuComponent.vue"
import CategorieProduitsComponent from "./CategorieProduitsComponent.vue"
/* import PaginationComponent from "./PaginationComponent.vue"; */

export default Vue.component('CategorieDetail', {
    name: 'CategorieDetail',
    data(){
        return {
            categorieList: {}, // Liste of all categories
            isLoading: Boolean, // For loading feature
            categorieProduits: {}, // Liste of products's of given categorie id
            categorieDetails: {}, // Details of categorie given by id
        };
    },
    components: {
        "tree-menu": TreeMenuComponent,
        "categorie-produits": CategorieProduitsComponent,
        /* "pagination": PaginationComponent, */
    },
    computed: {

    },

    mounted(){
        /* this.isLoading = this.$store.state.isLoading // For loading feature */
        this.getAllCategorie()
        this.getCategorieDetails()
    },

    watch: {
        $route(to,) {
            if(to.name === 'categories'){
                this.getAllCategorie()
                this.getCategorieDetails()
            }
        },
    },

    methods:{
        /* fetch all categories */
        async getAllCategorie(){
            this.$store.commit('setIsLoading', true)
            await axios
            .get('/categories/')
            .then(response => {
                this.categorieList = response.data.results
                console.log(this.categorieList)
            })
            .catch(error => {
                console.log(error)
            })
            this.$store.commit('setIsLoading', false)
        },

        /* fetch categorie details by categorie id */
        async getCategorieDetails(){
            this.$store.commit('setIsLoading', true)
            const categorieId = this.$route.params.id
            if (categorieId) {
                await axios
                    .get('/categories/'+categorieId+'/')
                    .then(response => {
                        /* Update data -> this.categorieDetails */
                        this.categorieDetails = response.data.results
                        console.log(this.categorieDetails)

                        /* Update data -> this.categorieProduits */
                        this.getCategorieProduits(categorieId)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
            else{
                // Fetch all produits if categorie id not given in url
                this.getAllProduit()
            }
            this.$store.commit('setIsLoading', false)
        },

        async getAllProduit(){
            await axios
                .get('/produits/')
                .then(response => {
                    this.categorieProduits = response.data.results
                    console.log('All produits fetched !')
                    console.log(this.categorieProduits)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        async getCategorieProduits(categorieId: String){
            await axios
                    .get('/produits/categorie/'+categorieId+'/')
                    .then(response => {
                        this.categorieProduits = response.data.results
                        console.log('Produit from categorie')
                        console.log(this.categorieProduits)
                    })
                    .catch(error => {
                        console.log(error)
                    });
        },
    }
})
</script>
