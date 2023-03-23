<template>
  <div class="filter-bar">
    <form class="d-flex" role="search">
      <div>
        <label for="filterCategory" class="me-2">Category</label>
        <select id="filterCategory" name="filterCategory" required v-model="category">
          <option value="" selected>Any</option>
          <option value="chess">Chess</option>
          <option value="coding">Coding</option>
          <option value="self-improvement">Self-Improvement</option>
        </select>
      </div>
      <div>
        <label for="filterPrice" class="me-2">Price</label>
        <select id="filterPrice" name="filterPrice" required v-model="price">
          <option value="" selected>Any</option>
          <option value="500">Under R500</option>
          <option value="300">Under R300</option>
        </select>
      </div>
      <div>
        <label for="author" class="me-2">Author</label>
        <input type="text" name="author" v-model="author">
      </div>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
        <img src="https://img.icons8.com/metro/26/FFFFFF/search.png" class="me-2" style="scale: 0.8;"/>
      </div>
    </form>
  </div>
  <br>
  <SpinnerVue v-if="showSpinner"/>
  <div class="content" v-else>

    <div class="row products-container">
  
      <div v-for="product in filterItems" :key="product.prodID" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <div class="card m-auto">
          <img :src="product.imgURL" class="card-img-top" :alt="product.prodName">
          <div class="card-body">
            <h5 class="card-title">{{product.prodName.slice(0, 27)}} ...</h5>
            <p class="card-text my-0">Author: {{product.author}}</p>
            <p class="card-text my-0">Price: R{{product.price}}</p>
            <router-link to="product" @click.prevent="()=>viewProduct(product)">See more ></router-link>
            <a @click.prevent="()=>addToCart(product)" class="ms-5">
              <img src="https://img.icons8.com/external-anggara-detail-outline-anggara-putra/48/FFFFFF/external-add-to-cart-retail-anggara-detail-outline-anggara-putra-2.png" width="30"/>
            </a>
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
    viewProduct(product) {
      this.$store.commit('setProduct', product);
      this.$router.push("/product");
    },
    addToCart(product) {

    }
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
  div.filter-bar {
    height: 300%;
    width: 100%;
    position: absolute;
  }
  form {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    background-color: #F61717;
    position: sticky;
    top: 60px;
    color: white;
    z-index: 5;
    padding: 4px;
    border-radius: 5px;
    box-shadow: 0 0 10px -2px black;
  }
  form div {
    height: 30px;
  }
  form div > * {
    height: 100%;
  }
  .products-container {
    margin: 20px auto;
    padding-top: 60px;
    width: 80%;
  }
  .card {
    border-radius: 0;
    max-width: 220px;
    height: 400px;
    overflow: hidden;
    text-align: left;
    color: #111;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    /* background: rgba(255, 255, 255, 0.4); */
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    color: #fff;
  }
  .card img {
    border-radius: 0;
    margin: auto;
    max-width: 220px;
    max-height: 230px;
  }
  .card h5 {
    max-height: 50px;
    overflow: hidden;
  }
  .card a {
    text-decoration: none;
    color: #f61717;
    cursor: pointer;
  }


</style>