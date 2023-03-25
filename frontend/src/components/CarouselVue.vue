<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">

      <div v-for="slide in slides" :key="slide" class="carousel-item" :class="{active: slide == slides[0]}">
        <img :src="slide.imgSrc" class="d-block w-100" :alt="slide.title">
        <div class="carousel-caption d-none d-md-block">
          <h4>{{slide.title}}</h4>
          <p>{{slide.description}}</p>
        </div>
      </div>

    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["slides"],
  components: {
  }
}
</script>
<style>
  h4, h5, p {
    text-shadow: 0 0 5px black;
  }
</style>