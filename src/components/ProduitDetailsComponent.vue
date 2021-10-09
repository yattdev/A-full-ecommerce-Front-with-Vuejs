<template>
    <div class="ProduitDetail">
        <div class="container mt-5">
            <div class="row">
                <!-- Image -->
                <div class="col-12 col-lg-6">
                    <div class="card bg-light mb-3">
                        <div class="card-body">
                            <a href="" data-toggle="modal" data-target="#productModal">
                                <img class="img-fluid" :src="produit.thumbnail" />
                                <p class="text-center">Zoom</p>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add to cart -->
                <div class="col-12 col-lg-6 add_to_cart_block">
                    <div class="card bg-light mb-3">
                        <div class="card-body">
                            <h2 class="name">{{ produit.nom_produit }}</h2>
                            <p class="price">${{ getItemTotal(produit).toFixed(2) }}</p>
                            <p class="price_discounted">discounted: {{ produit.prix_produit }} $</p>
                            <form method="get" action="cart.html">
                                <div class="form-group">
                                    <label>Quantity :</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <b-form-spinbutton id="demo-sb" v-model="quantity" min="1" max="100"></b-form-spinbutton>
                                        </div>
                                    </div>
                                </div>
                                <a
                                class="btn btn-success btn-lg btn-block text-uppercase"
                                @click="addToCard">
                                    <i class="fa fa-shopping-cart"></i> Add To Cart
                                </a>
                            </form>
                            <div class="product_rassurance mt-5">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-truck fa-2x"></i><br/>Fast delivery</li>
                                    <li class="list-inline-item"><i class="fa fa-credit-card fa-2x"></i><br/>Secure payment</li>
                                    <li class="list-inline-item"><i class="fa fa-phone fa-2x"></i><br/>+33 1 22 54 65 60</li>
                                </ul>
                            </div>
                            <div class="reviews_product p-3 mb-2 ">
                                3 reviews
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                (4/5)
                                <a class="pull-right" href="#reviews">View all reviews</a>
                            </div>
                            <div class="datasheet p-3 mb-2 bg-info text-white">
                                <a href="" class="text-white"><i class="fa fa-file-text"></i> Download DataSheet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Description -->
                <div class="col-12">
                    <div class="card border-light mb-3">
                        <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-align-justify"></i> Description</div>
                        <div class="card-body">
                            <p class="card-text" v-html="produit.description_produit"> </p>
                            <p class="card-text" v-html="produit.descriptif"> </p>
                        </div>
                    </div>
                </div>

                <!-- Reviews -->
                <div class="col-12" id="reviews">
                    <div class="card border-light mb-3">
                        <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-comment"></i> Reviews | Recommadation: {{ produit.note_recommandation }}</div>
                        <div class="card-body">
                            <div class="review">
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                <meta itemprop="datePublished" content="01-01-2016">January 01, 2018

                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                by Paul Smith
                                <p class="blockquote">
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </p>
                                <hr>
                            </div>
                            <div class="review">
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                <meta itemprop="datePublished" content="01-01-2016">January 01, 2018

                                <span class="fa fa-star" aria-hidden="true"></span>
                                <span class="fa fa-star" aria-hidden="true"></span>
                                <span class="fa fa-star" aria-hidden="true"></span>
                                <span class="fa fa-star" aria-hidden="true"></span>
                                <span class="fa fa-star" aria-hidden="true"></span>
                                by Paul Smith
                                <p class="blockquote">
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </p>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import axios from "axios"

export default Vue.component('ProduitDetail', {
    name: 'ProduitDetail',
    data() {
        return {
            produit: {
            },
            quantity: 1,
        };
    },
    mounted(){
        this.getProduitDetail();
    },
    methods: {
        async getProduitDetail() {
            this.$store.commit('setIsLoading', true)
            const produitId = this.$route.params.id
            await axios
                .get('/produits/'+produitId+"/")
                .then(response => {
                        this.produit = response.data;
                        console.log(this.produit);
                })
                .catch(error => {
                    console.log(error)
                })

            document.title = (this.produit as any).nom_produit + " | APTUS"
            this.$store.commit('setIsLoading', false)
        },

        addToCard() {
            if(isNaN(this.quantity) || this.quantity < 1){
                this.quantity = 1
            }

            const item = {
                produit: this.produit,
                quantity: this.quantity,
            }

            this.$bvToast.toast(
              'Produit à bien été ajouter au panier',
              {
                  title: 'BootstrapVue Toast',
                  autoHideDelay: 5000,
                  noCloseButton: true,
                  variant: 'success',
                  /* appendToast: append, */
                  autoHide: true
              }
            );
            this.$store.commit('addToCard', item)
        },

        getItemTotal(produit: any){
            return this.quantity * produit.prix_produit
        },
    },

});
</script>
