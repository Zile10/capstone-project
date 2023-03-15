<template>
  <NavBar v-if="!atLoginRegister"/>
  <router-view/>
  <FooterVue v-if="!atLoginRegister"/>
</template>

<script>
import NavBar from '@/components/NavBar.vue' 
import FooterVue from '@/components/FooterVue.vue' 
export default {
  components: {
    NavBar,
    FooterVue
  },
  computed: {
    atLoginRegister() {
      return (this.$router.name === "login" || this.$route.name === "register")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url(https://i.postimg.cc/vTbTpzfn/earth-globe-rotating-plexus.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
