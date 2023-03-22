<template>
  <SpinnerVue v-if="showSpinner"/>
  <div class="content" v-else>
    <form class="d-flex" role="search">
      <div>
        <select id="filterCategory" required v-model="category">
          <option value="" selected>Any</option>
          <option value="chess">Chess</option>
          <option value="coding">Coding</option>
          <option value="self-improvement">Self-Improvement</option>
        </select>
      </div>
      <div>
        <select id="filterPrice" required v-model="price">
          <option value="" selected>Any</option>
          <option value="500">Under R500</option>
          <option value="300">Under R300</option>
        </select>
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" name="author" v-model="author">
      </div>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
      </div>
    </form>
    <div class="row products-container">
  
      <div v-for="product in filterItems" :key="product" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
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

  </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue'
export default {
  components: {
    SpinnerVue
  },
  data() {
    return {
      category: '',
      price: '',
      author: '',
      search: '',
      order: ''
    }
  },
  methods: {
    // search() {

    // }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    filterItems() {
      let filteredByCategory = this.products.filter(item => item.category == this.category || this.category == '')
      let filteredByPrice = this.products.filter(item => item.price < this.price || this.price == '')
      let filteredByAuthor = this.products.filter(item => item.author.trim().toLowerCase().includes(this.author.trim().toLowerCase()) || this.author == '')
      let searched = this.products.filter(item => item.prodName.trim().toLowerCase().includes(this.search.trim().toLowerCase()));

      let filtered = filteredByCategory.filter(item => filteredByPrice.includes(item) && filteredByAuthor.includes(item) && searched.includes(item))

      let finalResult = filtered.sort((a, b) => {
        return a.price - b.price;
      });
      // if (!state.asc) {
      //   state.products.reverse();
      // }

      return finalResult
    },
    setSpinner(){
      if(this.$store.state.products) {
        this.$store.commit("setSpinner", false)
      }
    },
    showSpinner() {
      this.setSpinner
      return this.$store.state.showSpinner
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },
}
</script>

<style scoped>
  form {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: black;
  }
  form div {
    height: 30px;
  }
  form div > * {
    height: 100%;
  }
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