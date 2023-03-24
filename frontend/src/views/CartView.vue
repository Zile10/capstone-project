<template>
  <div>
    {{ cart }}
  </div>
</template>

<script>
export default {
  computed: {
    user(){
      return this.$store.state.user
    },
    product(){
      return this.$store.state.product
    },
    cart(){
      return this.$store.state.cart
    }
  },
  created(){
    this.$store.dispatch('fetchCart', {userID: this.user.userID})
  }
}
</script>

<style>
  
</style>