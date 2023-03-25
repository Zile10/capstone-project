<template>
  <div class="product-profile p-5">
    <div class="d-flex">
      <div class="img" :style="'background-image: url(' + product.imgURL + ')'"></div>
      <div class="info mx-4">
        <h1>{{ product.prodName }}</h1>
        <div class="data my-4">
          <div class="text-start">
            <p class="m-0">Author</p>
            <hr class="my-2">
            <p class="m-0">Category</p>
            <hr class="my-2">
            <p class="m-0">Stock</p>
            <hr class="my-2">
            <p class="m-0">Price</p>
          </div>
          <div class="text-end">
            <p class="m-0">{{ product.author || 'null' }}</p>
            <hr class="my-2">
            <p class="m-0">{{ capitalize(product.category) || 'null' }}</p>
            <hr class="my-2">
            <p class="m-0">{{ product.stock || 'null' }} Available</p>
            <hr class="my-2">
            <p class="m-0">R{{ product.price || 'null' }}</p>        
          </div>
        </div>
        <div class="btns d-flex justify-content-between">
            <button type="button" class="btn btn-dark rounded-0 bg-black text-white m-2" style="max-height: 38px;" @click="toRegister">
              Add to Cart
              <img src="https://img.icons8.com/external-anggara-detail-outline-anggara-putra/48/FFFFFF/external-add-to-cart-retail-anggara-detail-outline-anggara-putra-2.png" width="30"/>
            </button>
            <button type="button" class="btn btn-light border-dark rounded-0 px-4 m-2" @click="toLogin">
              Continue Browsing
            </button>
          </div>
      </div>
    </div>
    <hr>
    <div class="desc">
      <p>{{ product.prodDesc }}</p>
    </div>
    <!-- 
    <h1>{{ product.prodName }}</h1>
    <div class="img" :style="'background-image: url(' + product.imgURL + ')'"></div>

    <div class="d-flex">
      <div class="data">
        <div class="data-col d-flex justify-content-between">
          <p>name:</p> <p class="me-0 pe-0">{{ product.prodName }}</p>
        </div>
        <hr>
        <div class="data-col d-flex justify-content-between">
          <p>id:</p> <p class="me-0 pe-0">{{ product.prodID }}</p>
        </div>
        <hr>
        <div class="data-col d-flex justify-content-between">
          <p>stock:</p> <p class="me-0 pe-0">{{ product.stock }}</p>
        </div>
        <hr>
        <div class="data-col d-flex justify-content-between">
          <p>price:</p> <p class="me-0 pe-0">{{ product.price }}</p>
        </div>
        <hr>
        <div class="data-col d-flex justify-content-between">
          <p>seller:</p> <p class="me-0 pe-0">{{ product.seller }}</p>
        </div>
      </div>
    </div>
    <hr class="m-auto mt-0 mb-3" width="92%">
    <div class="d-flex">
      <p>{{ product.prodDesc }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    capitalize(string){
      if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1) 
      } else return null
    }
  },
  created(){
    // if (!this.$store.state.products) {
    //   history.back()
    // }
    let prodID = this.$route.params.prodID
    this.$store.dispatch('fetchProduct', prodID);

  },
  computed: {
    product() {
      return this.$store.state.product || {}
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');

  hr{opacity: 0.5;}
  .product-profile {
    /* color: white; */
    background-color: rgba(255, 255, 255, 0.45);
    margin: 20px auto;
    width: 70%;
    height: 550px;
    /* font-family: 'Courier Prime'; */
    /* box-shadow: -1px 1px 0px white, 1px -1px 0px white, -2px 2px 5px cyan, 2px -2px 5px cyan; */
    box-shadow: 0 0 5px -2px white;
    background: linear-gradient(135deg, transparent 45deg, rgba(0, 0, 0, 0.5) 0);
    overflow: hidden;
    backdrop-filter: blur(4px);
    border-radius: 16px;
    -webkit-backdrop-filter: blur(4px);
  }
  .img {
    width: 200px;
    height: 280px;
    border: 1px solid white;
    /* margin: 40px; */
    margin-bottom: 20px;
    background-size: cover;
    background-position: 50% 50%;
  }

  div.info {
    width: 80%
  }
  .data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* width: 100%; */
  }

  .desc {
    height: 30%;
    overflow: scroll;
    overflow-x: hidden;
  }
  
  .desc::-webkit-scrollbar {
    width: 7px;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
  }

  .desc::-webkit-scrollbar-thumb {
    background-color: crimson;
    width: 7px;
    border-radius: 10px;

  }

  /* 
  .product-profile {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px auto;
    margin-bottom: 50px;
    width: 70%;
    height: 550px;
    font-family: 'Courier Prime';
    box-shadow:  -1px 1px 0px white, 1px -1px 0px white, -2px 2px 5px cyan, 2px -2px 5px cyan;
    background: linear-gradient(135deg, transparent 45deg, rgba(0, 0, 0, 0.5) 0);
    overflow: hidden;
  }
  h2 {
    max-height: 45px;
    overflow: hidden;
    margin-top: 10px;
  }
  .img {
    min-width: 200px;
    min-height: 280px;
    border: 1px solid white;
    margin: 40px;
    margin-bottom: 20px;
    background-size: cover;
    background-position: 50% 50%;
  }
  .data {
    width: 100%;
    margin: 40px;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    background-color: #fff;
    opacity: 0.25;
    height: 1.5px;
  } */

</style>