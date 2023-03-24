<template>
  <div>
    {{ cart }}
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
      return this.$store.state.cart
    }
  },
  mounted(){
    this.$store.dispatch('fetchCart', {userID: this.user.userID})
  }
}
</script>

<style>
  
</style>