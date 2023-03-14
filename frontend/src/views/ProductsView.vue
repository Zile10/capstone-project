<template>
  <div class="products-container">
    <!-- <Card v-for="product in products" :key="product" :details="product"/> -->

    <div v-for="product in products" :key="product" class="card" style="width: 18rem;">
      <img :src="product.imgURL" class="card-img-top" :alt="product.prodName">
      <div class="card-body">
        <h5 class="card-title">{{product.prodDesc}}</h5>
        <p class="card-text">{{product.prodDesc}}</p>
        <a href="#" class="btn btn-primary">View Product</a>
      </div>
    </div>

  </div>
</template>
<script>
// import Card from '@/components/CardVue.vue'
export default {
  components: {
    // Card
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },
}
</script>
<style>
  .products-container {
    margin: auto;
    width: 90%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen {
    
  }
</style>