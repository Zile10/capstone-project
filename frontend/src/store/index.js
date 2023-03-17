import { createStore } from 'vuex';
import axios from "axios";
const apiUrl = "https://capstone-project-u8gz.onrender.com/"

export default createStore({
  state: {
    product: null,
    products: null,
    user: null,
    users: null,
    posts: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setProduct(state, data) {
      state.product = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
    setSpinner(state, data) {
      state.showSpinner = data
    },
    setPosts(state, data) {
      state.posts = data
    },
    setMessage(state, data) {
      state.message = data
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${apiUrl}login`, payload);
      const {result, err} = await res.data;

      if (result) {
        context.commit("setUser", result)
      } else {
        context.commit("setMessage", err)
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${apiUrl}users`, payload)
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err)
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${apiUrl}products`);
      const data = await res.data;
      // console.log(data);
      if (data !== undefined) {
        context.commit("setProducts", data);
        context.commit("setSpinner", false)
      } else context.commit("setSpinner", true);
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${apiUrl}product`);
      const data = await res.data
      context.commit("setProduct", data)
    },
    async fetchUsers(context) {
      const res = await axios.get(`${apiUrl}users`);
      const { results } = await res.data;
      if (results) {
        // console.log(results);
        context.commit("setProducts", results);
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${apiUrl}user`);
      const data = await res.data
      context.commit("setUser", data)
    },
  },
  modules: {
  }
})
