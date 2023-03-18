<template>
  <SpinnerVue v-if="showSpinner"/>
  <div class="row products-container">
    <div v-for="product in products" :key="product" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
      <div class="card m-auto">
        <img :src="product.imgURL" class="card-img-top" :alt="product.prodName">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
          <p class="card-text my-0">Author: {{product.author}}</p>
          <p class="card-text my-0">Price: R{{product.price}}</p>
          <router-link to="">See more ></router-link>
          <!-- <a href="#" class="btn btn-primary">View Product</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue'
export default {
  components: {
    SpinnerVue
  },
  methods: {
    filterItems(products) {
      let filteredByPrice = products.filter(item => item.price < priceRange.value || priceRange.value == 'any')
      let filteredByColor = products.filter(item => item.color == baseColor.value || baseColor.value == 'any')
      let filteredByGender = products.filter(item => item.gender == gender.value || gender.value == 'any')

      let finalResult = filteredByPrice.filter(item => filteredByColor.includes(item) && filteredByGender.includes(item))

      loadProductCards(finalResult)
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    showSpinner() {
      return this.$store.state.showSpinner
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