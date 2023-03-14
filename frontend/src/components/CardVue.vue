<template>
  <div class="card" style="width: 18rem;">
    <img :src="details.imgURL" class="card-img-top" :alt="details.prodName">
    <div class="card-body">
      <h5 class="card-title">{{details.prodDesc}}</h5>
      <p class="card-text">{{details.prodDesc}}</p>
      <a href="#" class="btn btn-primary">View Product</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["details"]
}
</script>
<style>

</style>