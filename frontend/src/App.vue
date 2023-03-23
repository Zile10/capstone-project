<template>
  <NavBar v-if="!atLoginRegister"/>
  <main>
    <router-view/>
  </main>
  <FooterVue v-if="!atLoginRegister"/>
</template>

<script>
import {useCookies} from 'vue3-cookies'
import NavBar from '@/components/NavBar.vue' 
import FooterVue from '@/components/FooterVue.vue' 

export default {
  components: {
    NavBar,
    FooterVue
  },
  created() {
    let {cookies} = useCookies();
    if (cookies.get("login_cookie")) {
      this.$store.commit('setUser', cookies.get("login_cookie").result)
    }
  },
  computed: {
    atLoginRegister() {
      return (this.$route.name === "login" || this.$route.name === "register")
    },
    user(){
      return this.$store.state.user
    },
    userCookie(){
      let loginCookie = cookies.get("login_cookie");
      return loginCookie
    },
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
  height: 100vh;
  
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
main {
  min-height: 100%;
  /* height: 100%; */
  margin-top: 80px;
}
body {
  /* background-image: url(https://i.postimg.cc/vTbTpzfn/earth-globe-rotating-plexus.jpg); */
  background-image: url(https://i.postimg.cc/8cfGb37m/DALL-E-2023-03-16-11-44-54-blue-space-images.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
