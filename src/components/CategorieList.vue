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
                                  <tree-menu
                                     :nodes="categorie.enfants"
                                     :depth="0"
                                     :label="categorie.libelle"
                                     :lien="categorie.id"
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
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
                        <div class="col-12">
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script charset="utf-8" lang="ts">
import { Vue } from 'vue-property-decorator';
import axios from "axios";
import TreeMenu from "./TreeMenu.vue"

export default Vue.component('CategorieList', {
    /* afficher la listes des categorie et leurs enfants */
    /* afficher la liste des produits d'un categorie lorsqu'on click sur */
    /* Afficher la list des arborescence des categorie sur bar */
    name: 'CategorieList',
    data(){
        return {
            categorieList: {},
            categorieProduits: {},
            isLoading: Boolean, // For loading feature
        };
    },
    components: {
        "tree-menu": TreeMenu,
    },
    mounted(){
        /* this.isLoading = this.$store.state.isLoading // For loading feature */
        this.getCategories()
    },
    methods:{
        async getCategories(){
            /* TODO: Call loading methode with (true) */
            await axios
            .get('/categories/')
            .then(response => {
                this.categorieList = response.data.results
                console.log(this.categorieList)
            })
            .catch(error => {
                console.log(error)
            })
            /* TODO: Call loading methode with (false) */
        },

        async getCategorieProduits(categorie: any){
            await axios
                .get('/produits/categorie/'+categorie.id+'/')
                .then(response => {
                    this.categorieProduits = response.data.results
                    console.log(this.categorieProduits)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})
</script>
