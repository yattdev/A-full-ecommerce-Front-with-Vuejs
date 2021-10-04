<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Simple Ecommerce</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/categories">produits</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0" action="/search">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" placeholder="Search..." name="query">
                        <div class="input-group-append">
                            <button type="button" class="btn btn-secondary btn-number">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <div class="navbar-item m-auto">
                    <div class="buttons">
                        <router-link class="btn btn-success btn-sm ml-3" to="/cart">
                            <i class="fa fa-shopping-cart"></i> Cart
                            <span class="badge badge-light">{{ cartTotalLength }}</span>
                        </router-link>

                        <router-link class="btn btn-primary btn-sm ml-3" to="/log-in">
                            <i class="fas fa-sign-in-alt"></i> Log in
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">E-COMMERCE BOOTSTRAP THEME</h1>
            <p class="lead text-muted mb-0">Simple theme for e-commerce buid with Bootstrap 4.0.0. Pages available : home, category, product, cart & contact</p>
        </div>
    </section>

    <section class="section">
        <div>
            <overlay :opened="true" :visible="true" @closed="isLoading = false" animate="bounce"></overlay>
        </div>
        <router-view/>
    </section>
    <!-- Footer -->
    <footer class="text-light">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-4 col-xl-3">
                    <h5>About</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
                    <p class="mb-0">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                    </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h5>Informations</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
                    <ul class="list-unstyled">
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                        <li><a href="">Link 4</a></li>
                    </ul>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
                    <h5>Others links</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
                    <ul class="list-unstyled">
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                        <li><a href="">Link 4</a></li>
                    </ul>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3">
                    <h5>Contact</h5>
                    <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
                    <ul class="list-unstyled">
                        <li><i class="fa fa-home mr-2"></i> My company</li>
                        <li><i class="fa fa-envelope mr-2"></i> email@example.com</li>
                        <li><i class="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
                        <li><i class="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                    </ul>
                </div>
                <div class="col-12 copyright mt-3">
                    <p class="float-left">
                        <a href="#">Back to top</a>
                    </p>
                    <p class="text-right text-muted">created with <i class="fa fa-heart"></i> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>t-php</i></a> | <span>v. 1.0</span></p>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script charset="utf-8">
import { Vue } from 'vue-property-decorator';
import Overlay from 'vuejs-overlay';
export default Vue.extend({
    data() {
        return {
            cart: {
                items: [
                ],
            },
            isLoading: Boolean
        }
    },
    components: {
        "overlay": Overlay,
    },
    beforeCreate(){
        this.$store.commit('initializeStore');
    },
    mounted() {
        this.cart = this.$store.state.cart;
        this.isLoading = this.$store.isLoading;
    },
    computed: {
        cartTotalLength(){
            let totalLength = 0;

            for (let i=0; i < this.cart.items.length; i++){
                totalLength += this.cart.items[i].quantity;
            }

            return totalLength;
        }
    },

});
</script>
