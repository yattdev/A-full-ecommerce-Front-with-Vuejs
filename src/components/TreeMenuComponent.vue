<template>
  <div class="tree-menu">
    <div class="label-wrapper" v-on:click="UpdateProduitList(id)">
      <div :style="indent" :class="labelClasses">
        <i v-if="nodes" class="fa" :class="iconClasses"></i>
        <router-link :to="'/categories/'+id">
            {{ label }}
        </router-link>
      </div>
    </div>
    <tree-menu
      v-if="showChildren"
      v-for="node in nodes"
      v-bind:key="node.id"
      :id="node.id"
      :nodes="node.enfants"
      :label="node.libelle"
      :depth="depth + 1"
    >
    </tree-menu>
  </div>
</template>
<script charset="utf-8">
import { Vue } from 'vue-property-decorator';
/* import axios from "axios" */

export default Vue.component('tree-menu', {
  /* template: '#tree-menu', */
  props: [ 'id', 'nodes', 'label', 'depth' ],
  data() {
     return {
       showChildren: false
     }
  },
  computed: {
    iconClasses() {
      return {
        'fa-plus-square-o': !this.showChildren,
        'fa-minus-square-o': this.showChildren
      }
    },
    labelClasses() {
      return { 'has-children': this.nodes }
    },
    indent() {
      return { transform: `translate(${this.depth * 50}px)` }
    }
  },
  methods: {
    toggleChildren() {
       this.showChildren = !this.showChildren;
    },
    UpdateProduitList(id){
        this.toggleChildren()
        this.$emit('clicked', id)
    }
  }
});
</script>
