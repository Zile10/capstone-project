<template>
  <div class="cart">
    <h1>Cart</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            #
            <button class="sort-btn" onclick="sortList()" value="numUp">
              Price:
              <img
                src="https://img.icons8.com/material-outlined/24/null/numerical-sorting-12.png"
              />
            </button>
          </th>
          <th scope="col">Item Name</th>
          <th scope="col">Price</th>
          <th scope="col">Amount In Stock</th>
          <th scope="col">Author</th>
          <th scope="col">Quantity</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-for="order in cart" :key="order.orderID" class="products-table">
        <tr :id="`item-row-${order.orderID}`">
          <th scope="row">{{cart.indexOf(order) + 1}}</th>
          <td>{{order.prodName}}</td>
          <td>R{{order.price}}</td>
          <td>{{order.qty}}</td>
          <td>{{order.author}}</td>
          <td>
            <input type="number" class="qty" v-model="order.qty">
          </td>
          <td>
            <button
              style="background-color: rgba(255, 255, 255, 0); border: none"
              class="del-item"
              @click="()=>delOrder(order.orderID)"
            >
              <img
                style="height: 30px"
                src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"
              />
            </button>
          </td>
        </tr>
      </tbody>
  
      <tfoot></tfoot>
    </table>
    <button class="m-4">Proceed to Checkout</button>
  </div>
</template>

<script>
export default {
  methods: {
    delOrder(orderID){
        this.$store.dispatch('deleteOrder', orderID)
    }
  },
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
  created(){
    this.$store.dispatch('fetchCart', this.user.userID)
  }
}
</script>

<style scoped>
  .cart {
    color: white;
  }
  .cart table {
    width: 80%;
    margin: auto;
  }

  .cart th, .cart td {
    color: white !important;
  }
  .qty {
    width: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px;
    border: 2px solid crimson;
  }
</style>