<template>
  <div class="row products-container">
    <div v-for="product in products" :key="product" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
      <div class="card m-auto">
        <img :src="product.imgURL" class="card-img-top" :alt="product.prodName">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
          <p class="card-text">Price: R{{product.price}}</p>
          <router-link to="">See more ></router-link>
          <!-- <a href="#" class="btn btn-primary">View Product</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
  .products-container {
    margin: 20px auto;
    width: 80%;
  }
  .card {
    border-radius: 0;
    max-width: 220px;
    height: 400px;
    overflow: hidden;
    text-align: left;
  }

  .card img {
    border-radius: 0;
    margin: auto;
    max-width: 220px;
    max-height: 230px;
  }

  a {
    text-decoration: none;
  }


</style>