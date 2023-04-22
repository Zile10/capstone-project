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
            <ModalVue :id="'edit-prod-' + order.prodID">
              <template #modal-header>
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    <span>{{ order.prodID + '. ' }}</span>
                    <input type="text" class="modal-input" v-model="currentProduct.prodName">
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </template>

              <div class="img d-flex flex-column align-items-center">
                <img :src="order.imgURL" alt="" width="150">
                <input type="text" class="modal-input" v-model="currentProduct.imgURL">
              </div>
              
              <div class="modal-info">
                <hr><hr>
                <label for="currentAuthor">Author:</label>
                <input type="text" class="modal-input" name="currentAuthor" v-model="currentProduct.author">
                <hr><hr>
                <label for="currentStock">Stock:</label>
                <input type="text" class="modal-input" name="currentStock" v-model="currentProduct.stock">
                <hr><hr>
                <label for="currentPrice">Price:</label>
                <input type="text" class="modal-input" name="currentPrice" v-model="currentProduct.price">
                <hr><hr>
                <label for="currentCategory">Category:</label>
                <input type="text" class="modal-input" name="currentCategory" v-model="currentProduct.category">
              </div>

              <div class="modal-desc">
                <hr>
                <label for="currentDesc">Description:</label>
                <textarea type="text" class="modal-input" name="currentDesc" v-model="currentProduct.prodDesc"></textarea>
              </div>

              <template #modal-footer>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" @click="()=>updateProduct(product.prodID)">Save changes</button>
                </div>
              </template>
            </ModalVue>

          </td>
          <td>
            <button
              style="background-color: rgba(255, 255, 255, 0); border: none"
              class="del-item"
              @click="()=>delOrder(order.orderID, order.userID)"
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
import ModalVue from '@/components/ModalVue.vue'
export default {
  components: {
    ModalVue
  },
  data() {
    return {
      currentOrder: {
        orderData: {
          prodName: '',
          price: '',
          qty: '',
          author: '',
        },
      }
    }
  },
  methods: {
    delOrder(orderID, userID){
      this.$store.dispatch('deleteOrder', orderID, userID)
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