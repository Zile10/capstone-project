<template>
  <div class="home">
    <div class="hero-banner">
      <div class="left text-start d-flex flex-column justify-content-evenly">
        <h1>Strategise to <br>Reach Your Life <br>Objectives</h1>
        <p>Stratagem will provide you with the community and the resources you'll need to take control of your life and plan your way to success!</p>
        <div class="btns d-flex justify-content-between">
          <button type="button" class="btn btn-dark rounded-0 bg-black text-white" @click="toRegister">Register for Free</button>
          <button type="button" class="btn btn-light border-dark rounded-0 px-5" @click="toLogin">Login</button>
        </div>
      </div>
      <div class="right">
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>

        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>


      </div>
    </div>

    <div class="daily-book">
      <div class="left"></div>
      <div class="right d-flex flex-column justify-content-evenly">
        <h2>Strategise to Reach Your Life Objectives</h2>
        <div>
          <p>Stratagem will provide you with the community and the resources you'll need to take control of your life and plan your way to success!</p>
          <!-- <button type="button" class="btn btn-dark rounded-0 bg-black text-white m-auto">Register for Free</button> -->
          <button type="button" class="btn btn-light border-dark rounded-0 mt-0">Learn More</button>

        </div>
      </div>
    </div>

    <!-- <div class="right">
      <Carousel :slides="carouselSlides"/>
    </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/CarouselVue.vue'

export default {
  name: 'HomeView',
  components: {
    Carousel
  },
  methods: {
    toRegister(){
      this.$router.push("/register");
    },
    toLogin(){
      this.$router.push("/login");
    }
  },
  data() {
    return {
      carouselSlides: [
        {
          imgSrc: 'https://i.postimg.cc/52TjSdf1/robert-greene-books.webp',
          title: "",
          description: ""
        }, 
        {
          imgSrc: 'https://i.postimg.cc/g2wHdG7C/Robert-Greene-chessbg.webp',
          title: "",
          description: ""
        }, 
        {
          imgSrc: '',
          title: "",
          description: ""
        }
      ]
    }
  },
  mounted() {
    console.log(this.$store.state.user);
  },

}
</script>

<style>
.home {
  color: #fff;
}
.hero-banner {
  height: 80vh;
  /* background-color: #ccc; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: auto;
  width: 85%;
}
.left, .right{
  width: 90%;
  height: 90%;
  /* border: 1px solid black; */
  margin: auto;
}

.hero-banner .right {
  background-image: url(https://i.postimg.cc/g2wHdG7C/Robert-Greene-chessbg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: visible !important;
  /* -webkit-overflow-scrolling: ; */
  border-radius: 100px !important;
}

.hologram-line {
  width: 100%;
  height: 1px;
  /* padding-left: 2px; */
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 6px 1px rgba(0, 255, 255, 1);
  margin-bottom: 10px;
}

.daily-book {
  height: 75vh;
  /* background-color: #ccc; */
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin: auto;
  width: 85%;
}

.daily-book .left {
  background-image: url(https://i.postimg.cc/bJPxQkvP/robert-greene-books.webp);
  background-repeat: no-repeat;
  background-size: cover;
}

.daily-book .right {
  text-align: left;
}
.daily-book .right button {
  width: fit-content;
}

</style>
