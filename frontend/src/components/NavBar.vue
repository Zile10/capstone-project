<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex">
          STRATA<span style="color: #F61717;">GEM</span>
          <div class="logo-square square-1"></div>
          <div class="logo-square square-2"></div>
          <div class="logo-square square-3"></div>
          <!-- <div class="logo-square square-4"></div> -->
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 ps-5 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li>
          </ul>
          <form class="d-flex me-0" role="search" v-if="user">
            <router-link to="profile" class="nav-link">
              <!-- <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-user-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"/> -->
              <img :src="user.profileURL" style="border-radius: 100%;" width="24" class="me-1"/>
              {{ user.username }}
            </router-link>
          </form>
          <div class="btns" v-else>
            <button type="button" class="btn btn-dark rounded-0 bg-black text-white" @click="toRegister">Register for Free</button>
            <button type="button" class="btn btn-light border-dark rounded-0 px-4 m-2" @click="toLogin">Login</button>
          </div>
        </div>
      </div>
    </nav>
    <hr>
  </div>
</template>
<script>
export default {
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
    },
    isAdmin(){
      if (this.user.userRole && this.user.userRole == 'admin') {
        return true
      } else return false
    }
  },
  mounted(){
    console.log(this.user.userRole == 'admin');
  }
}
</script>
<style scoped>
  div.nav {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
  }
  nav {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    /* font-family: 'Courier Prime'; */    
  }
  nav>div {
    margin: 0 30px;
    
  }
  nav ul li a, nav div a {
    color: #fff !important;
  }
  .logo-square{
    width: 30px;
    height: 30px;
    /* background-color: red; */
    position: relative;
    box-sizing: border-box;
    translate: 15px;
    scale: 1.2;
    opacity: 0.72;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  /* .square-1{
    left: 10px;
    background-color: red;
  } */
  .square-1 {
    left: 10px;
    rotate: -30deg;
    background-color: #A60000;
  }
  .square-2 {
    left: -20px;
    rotate: 30deg;
    background-color: #EE3434/*rgb(255, 62, 94)*/;
  }
  .square-3 {
    left: -50px;
    rotate: 0deg;
    background-color: #F61717;
  }
  hr {
    height: 1px;
    background-color: #fff;
    border: none;
    width: 95%;
    margin: 0 auto 25px auto;
    opacity: 1;
    box-shadow: 0 2px 5px 1px black;
  }
</style>