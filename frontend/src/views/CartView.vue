<template>
  <div>
    <h1>{{ `${cart}` }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    user(){
      if (this.$store.state.user) {
        return this.$store.state.user
      } else {
        this.$store.commit('setUser', cookies.get("login_cookie").result);
        return this.$store.state.user
      }
    },
    product(){
      return this.$store.state.product
    },
    cart(){
      console.log(JSON.stringify(this.$store.state.cart));
      return this.$store.state.cart
    }
  },
  created(){
    console.log(this.$store.state.user.userID);
    this.$store.dispatch('fetchCart', {userID: this.user.userID})
  }
}
</script>

<style>
  
</style>