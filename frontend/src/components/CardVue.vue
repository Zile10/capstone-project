<template>
  <div class="card" style="width: 18rem;">
  <img :src="details.imgSrc" class="card-img-top" :alt="details.title">
  <div class="card-body">
    <h5 class="card-title">{{details.title}}</h5>
    <p class="card-text">{{details.description}}</p>
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