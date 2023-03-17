<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Stratagem</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search" v-if="false">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="btns" v-else>
          <button type="button" class="btn btn-dark rounded-0 bg-black text-white" @click="toRegister">Register for Free</button>
          <button type="button" class="btn btn-light border-dark rounded-0 px-4 m-2" @click="toLogin">Login</button>
        </div>
      </div>
    </div>
  </nav>
  <hr noshade>

  <!-- <nav class="text-dark">
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav> -->
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
}
</script>
<style scoped>
  nav {
    margin: 0 30px;
  }
  nav ul li a, nav div a {
    color: #fff !important;
  }
  hr {
    height: 1px;
    background-color: #fff;
    border: none;
    width: 95%;
    margin: 0 auto 30px auto;
    opacity: 1;
  }
</style>