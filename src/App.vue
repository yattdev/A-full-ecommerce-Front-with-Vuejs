<template>
  <html lang="en" id="App">
    <head>
      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
      <!-- Favicons -->
      <link href="./assets/img/favicon.png" rel="icon">
      <link href="./assets/img/apple-touch-icon.png" rel="apple-touch-icon">

      <!-- Vendor CSS Files -->
      <link href="./assets/vendor/animate.css/animate.min.css" rel="stylesheet">
      <link href="./assets/vendor/aos/aos.css" rel="stylesheet">
      <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
      <link href="./assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
      <link href="./assets/vendor/remixicon/remixicon.css" rel="stylesheet">
      <link href="./assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    </head>
    <body>
      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">APTUS EDUCATION</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><router-link class="text-decoration-none" to="/">Home</router-link></li>
              <li><a href="about.html">About</a></li>
              <li><router-link to="/categories">Cours</router-link></li>

              <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

            <router-link to="/cart" class="get-started-btn">
              <i class="fa fa-shopping-cart"></i> Cart
              <span class="badge badge-light">{{ cartTotalLength }}</span>
            </router-link>
            <router-link v-if="!isAuthenticated" class="btn btn-primary btn-sm ml-3" to="/signup">
                <i class="fas fa-user-plus"></i> Sign-Up
            </router-link>
            <a v-if="isAuthenticated" class="btn btn-danger btn-sm ml-3" v-on:click="log_out">
                <i class="fas fa-sign-out-alt"></i> Log Out
            </a>

        </div>
      </header><!-- End Header -->

      <!-- ======= Hero Section ======= -->
      <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>Learning Today,<br>Leading Tomorrow</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <router-link to="/categories" class="btn-get-started">Les courses</router-link>
        </div>
      </section><!-- End Hero -->

      <router-view/>

      <!-- ======= Footer ======= -->
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>APTUS EDUCATION</h3>
                <p>
                  A108 Adam Street <br>
                  New York, NY 535022<br>
                  United States <br><br>
                  <strong>Phone:</strong> +1 5589 55488 55<br>
                  <strong>Email:</strong> info@example.com<br>
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <router-link to="/">Home</router-link></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email"><input type="submit" value="Subscribe">
                </form>
              </div>

            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">

          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright <strong><span>APTUS EDUCATION</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/APTUS EDUCATION-free-education-bootstrap-theme/ -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer><!-- End Footer -->

    </body>
  </html>
</template>

<script charset="utf-8">
/* <!-- Template Main CSS File --> */
require("@/assets/css/style.css");

import axios from 'axios';
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

        const token = this.$store.state.token
        if(token){
            axios.defaults.headers.common['Authorization'] = "Token " + token
        }
        else {
            axios.defaults.headers.common['Authorization'] = ""
        }
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
        },

        isAuthenticated() {
            return this.$store.state.isAuthenticated
        },

    },

    methods: {
        log_out(){
            /* log-out user */
            const token = localStorage.getItem('token')
            this.$store.commit('removeToken', token)

            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('userId')

            axios.defaults.headers.common["Authorization"] = ""
            axios.defaults.headers.common['X-CSRFToken'] = ""

            this.$router.push('/')
        },
     }

});
</script>
