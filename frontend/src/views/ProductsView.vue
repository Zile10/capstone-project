<template>
  <div class="products-container">
    <Card v-for="product in products" :details="product"/>

  </div>
</template>
<script>
import Card from '@/components/CardVue.vue'
export default {
  components: {
    Card
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    console.log(this.products);
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
}
</script>
<style>
  .products-container {
    margin: auto;
    width: 95%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen {
    
  }
</style>