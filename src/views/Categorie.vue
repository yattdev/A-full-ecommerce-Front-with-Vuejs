<template>
  <div class="categorie">
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
