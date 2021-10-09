<template>
  <div id="Home container mt-4">

  <main id="main">

    <!-- ======= Popular Cours Section ======= -->
    <section id="popular-cours" class="cours">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Cours</h2>
          <p>Popular Cours</p>
        </div>

        <produits-list-component :propProduitsList="produitsList"/>
      </div>
    </section><!-- End Popular Cours Section -->

    <!-- ======= Trainers Section ======= -->
    <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Formateurs</h2>
          <p>Profiles des formateurs</p>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>Walter White</h4>
                <span>Web Development</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/trainers/trainer-2.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>Sarah Jhinson</h4>
                <span>Marketing</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="@/assets/img/trainers/trainer-3.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>William Anderson</h4>
                <span>Content</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Trainers Section -->

  </main><!-- End #main -->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProduitsListComponent from '@/components/ProduitsListComponent.vue'; // @ is an alias to /src
import axios from "axios";
/* import HeaderComponent from "@/components/HeaderComponent.vue"; */
/* import SectionComponent from "@/components/SectionComponent.vue"; */

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            produitsList: {},
        }
    },

    components: {
        'produits-list-component': ProduitsListComponent,
        /* "header-component": HeaderComponent, */
        /* "section-component": SectionComponent, */
    },

    mounted(){
        this.getProduitsList();
    },

    methods: {
        getProduitsList() {
            this.$store.commit('setIsLoading', true)
            axios.defaults.headers.common["Authorization"] = ""
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
