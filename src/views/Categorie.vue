<template>
  <div class="categorie">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs mt-0 mb-5">
      <div class="container">
        <h2>La liste des cours</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div><!-- End Breadcrumbs -->
    <CategorieDetailsComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CategorieDetailsComponent from '@/components/CategorieDetailsComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    CategorieDetailsComponent,
  },
})
export default class Categorie extends Vue {}
</script>
