<template>
  <SpinnerVue v-if="showSpinner"/>
  <div class="admin-container" v-else>
    <h2>Products</h2>
    <table class="table table-dark table-striped">
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
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-for="product in products" :key="product.prodID" class="products-table">
        <tr id="item-row-{{product.prodID}}">
          <th scope="row">{{product.prodID}}</th>
          <td>{{product.prodName}}</td>
          <td>R{{product.price}}</td>
          <td>{{product.stock}}</td>
          <td>{{product.author}}</td>
          <td>
            <button
              style="background-color: rgba(255, 255, 255, 0); border: none"
              class="edit-item"
              data-bs-toggle="modal"
              :data-bs-target="'#edit-prod-' + product.prodID + '-Modal'"
              :id="'#edit-prod-' + product.prodID + '-Modal'"
              @click="()=>setCurrentProd(product)"
            >
              <img
                style="height: 30px"
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-edit-interface-kiranshastry-lineal-kiranshastry.png"
              />
            </button>
          </td>
          <td>
            <button
              style="background-color: rgba(255, 255, 255, 0); border: none"
              class="del-item"
              onclick="itemRemove({{product.id - 1}})"
            >
              <img
                style="height: 30px"
                src="https://img.icons8.com/material-rounded/48/FFFFFF/trash.png"
              />
            </button>
          </td>
        </tr>
        <ModalVue :id="'edit-prod-' + product.prodID">
          <template #modal-header>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                <span>{{ product.prodID + '. ' }}</span>
                <input type="text" class="modal-input" v-model="currentProduct.prodName">
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </template>

          <div class="img d-flex flex-column align-items-center">
            <img :src="product.imgURL" alt="" width="150">
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
      </tbody>
  
      <tfoot></tfoot>
    </table>

    <h2>Users</h2>
    <table class="table table-dark table-striped">
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
        <th scope="col">Username</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">phone</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody v-for="user in users" :key="user.userID" class="products-table">
      <tr id="item-row-{{user.userID}}">
        <th scope="row">{{user.userID}}</th>
        <td>{{user.username}}</td>
        <td>{{user.firstName}} {{ user.lastName }}</td>
        <td>{{user.email}}</td>
        <td>{{user.contactNumber}}</td>
        <td>
          <button
            style="background-color: rgba(255, 255, 255, 0); border: none"
            class="edit-item"
            data-bs-toggle="modal"
            data-bs-target="#edit-modal-{{product.prodID}}"
            id="edit-modal-btn-{{product.prodID}}"
          >
            <img
              style="height: 30px"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FFFFFF/external-edit-interface-kiranshastry-lineal-kiranshastry.png"
            />
          </button>
        </td>
        <td>
          <button
            style="background-color: rgba(255, 255, 255, 0); border: none"
            class="del-item"
            onclick="itemRemove({{product.id - 1}})"
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

  </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue'
import ModalVue from '@/components/ModalVue.vue'
export default {
  components: {
    SpinnerVue,
    ModalVue
  },
  data() {
    return {
      currentProduct: {
        prodID: '',
        prodName: '',
        author: '',
        prodDesc: '',
        price: '',
        stock: '',
        imgURL: '',
        category: '',
      }
    }
  },
  methods: {
    setCurrentProd(product){
      this.currentProduct = product
    },
    updateProduct(prodID){
      this.currentProduct.prodID= prodID
      this.$store.dispatch('updateProduct', this.currentProduct)
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    users() {
      return this.$store.state.users
    },
    setSpinner(){
      if(this.$store.state.products && this.$store.state.users) {
        this.$store.commit("setSpinner", false)
      }
    },
    showSpinner() {
      this.setSpinner
      return this.$store.state.showSpinner
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchUsers')
  },
};
</script>
<style>
  .admin-container {
    color: white;
    margin-bottom: 30px;
  }
  .table {
    width: 80%;
    margin: auto;
    background-color: transparent;
  }
  .modal-input, textarea {
    color: #111;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }
  .modal-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  .modal-info label {
    text-align: start;
  }
  .modal-info input {
    text-align: end;
  }
  .modal-desc textarea {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    width: 400px;
    height: 150px;
  }

  textarea {
    overflow: scroll;
    overflow-x: hidden;
  }
  
  textarea::-webkit-scrollbar {
    width: 7px;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: crimson;
    width: 7px;
    border-radius: 10px;

  }

</style>
