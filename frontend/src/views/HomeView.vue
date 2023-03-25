<template>
  <div class="home">
    <div class="logged-out">
      <div class="hero-banner">
        <div class="left text-start d-flex flex-column justify-content-evenly">
          <h1>Strategise to <br>Reach Your Life <br>Objectives</h1>
          <p>Stratagem will provide you with the community and the resources you'll need to take control of your life and plan your way to success!</p>
          <div class="btns" v-if="!user">
            <button type="button" class="btn btn-dark rounded-0 bg-black text-white" @click="toRegister">Register for Free</button>
            <button type="button" class="btn btn-light border-dark rounded-0 px-5" @click="toLogin">Login</button>
          </div>
        </div>
        <div class="right">
          <img src="https://i.postimg.cc/Yq9hkTMv/planet-remix-fixed.webp" alt="">
  
        </div>
        <!-- <img src="https://publicdomainvectors.org/tn_img/planet-remix-fixed.webp" alt=""> -->
      </div>
  
      <div class="daily-book">
        <div class="left">
          <Carousel :slides="slides"/>
        </div>
        <div class="right d-flex flex-column justify-content-evenly">
          <h2>A Range of Topics to Peak Your Interests!</h2>
          <div>
            <p>
              From self-improvement to programming, to chess. If it involves a calculating, strategic mind at work, we're interested!
              Buy books on these topics and chat with a like-minded community.
            </p>
            <!-- <button type="button" class="btn btn-dark rounded-0 bg-black text-white m-auto">Register for Free</button> -->
            <button type="button" class="btn btn-light border-dark rounded-0 mt-0">Learn More</button>
  
          </div>
        </div>
      </div>
    </div>

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
  data() {
    return {
      slides: [
        {
          imgSrc: 'https://i.postimg.cc/SKN5zjyh/15382-fb8a52cb-5000x5000o-a76d828c8802.jpg',
          title: 'Chess: The Game of Kings!',
          description: 'Inspiring great strategic mind for centuries, chess is not a simple game. To get better at it, you must practise vigourously! But understanding the ideas and theory behind the game is just as important...',
        },
        {
          imgSrc: 'https://i.postimg.cc/Dwq56GvG/best-personal-development-books-HEADER2-MC.jpg',
          title: 'Self-Improvement: The Ultimate Desire of All Great Strategists',
          description: 'To minipulate circumstances in order to reach a objective. That is strategy. And every objective seeks reach a new improved position compared to those we had before. It is time you wield your strategic prowess to reach your greatest objective: yourself...',
        },
        {
          imgSrc: 'https://i.postimg.cc/T3p5YMS3/Inside-the-machine-1024x576.webp',
          title: 'Programming: Code and Logic',
          description: 'Coding requires an understanding of pure logic. Being able to calculate and predict the your code might do before you run it, is what seperates the good programmers from the average Joe. Coding teaches many vitals skills that all strategists need...',
        },
      ]
    }
  },
  methods: {
    toRegister(){
      this.$router.push("/register");
    },
    toLogin(){
      this.$router.push("/login");
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  }
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
  margin: auto;
}

.hero-banner .right {
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-banner img {
  width: 45%;
  animation: 4s 1s linear infinite alternate float;
  scale: 1.3;
}

.daily-book {
  /* height: 45vh; */
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin:  20px auto;
  margin-bottom: 100px;
  width: 85%;
}

.daily-book .left {
  /* background-image: url(https://i.postimg.cc/bJPxQkvP/robert-greene-books.webp); */
  background-repeat: no-repeat;
  background-size: cover;
}

.daily-book .right {
  text-align: left;
}
.daily-book .right button {
  width: fit-content;
}

.btns {
  display: flex;
  justify-content: space-between;
}

@keyframes float {
  0% {
    transform: translateY(15px);
  }

  25% {
    transform: translateY(4px);
  }

  50% {
    transform: translateY(-13px);
  }

  75% {
    transform: translateY(-29px);
  }

  100% {
    transform: translateY(-40px);
  }
}

@media only screen and (max-width: 720px) {
  .hero-banner {
    display: flex;
  }
  .hero-banner .right {
    position: absolute;
    z-index: -1;
    margin: 0;
  }
  .hero-banner .right img {
    animation: none;
  }
}
@media only screen and (max-width: 450px) {
  .btns {
    flex-direction: column;
    height: 20%;
  }
}

</style>
