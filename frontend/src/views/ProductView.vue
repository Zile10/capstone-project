<template>
  <div class="product-profile">
    <h1>Product Profile</h1>
    <div class="d-flex">
      <div class="img" :style="'background-image: url(' + product.imgURL + ')'"></div>
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
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product || {}
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');

  .product-profile {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px auto;
    margin-bottom: 50px;
    /* position: relative; */
    width: 70%;
    height: 550px;
    font-family: 'Courier Prime';
    box-shadow: /* 5px -5px 5px -4px black, */ -1px 1px 0px white, 1px -1px 0px white, -2px 2px 5px cyan, 2px -2px 5px cyan;
    background: linear-gradient(135deg, transparent 45deg, rgba(0, 0, 0, 0.5) 0);
    overflow: hidden;
  }
  /* .product-profile:before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    border-top: 80px solid white;
    border-right: 80px solid red;
    width: 0;
  } */
  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 60px;
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
  }

</style>