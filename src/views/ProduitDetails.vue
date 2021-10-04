<template>
  <div class="ProduitDetails">
    <ProduitDetailsComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProduitDetailsComponent from '@/components/ProduitDetailsComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    ProduitDetailsComponent,
  },
})
export default class ProduitDetails extends Vue {}
</script>
