import { createStore } from 'vuex';
import {useCookies, globalCookiesConfig} from 'vue3-cookies'
import axios from "axios";
const apiUrl = "https://capstone-project-u8gz.onrender.com/"
const {cookies} = useCookies();

globalCookiesConfig({
  expireTimes: "1h",
});

export default createStore({
  state: {
    product: null,
    products: null,
    user: null,
    users: null,
    posts: null,
    token: null,
    isVerified: false,
    message: null,
    showSpinner: true,
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
    setToken(state, data) {
      state.token = data
    },
    setMessage(state, data) {
      state.message = data
    },
    setVerified(state, data) {
      state.isVerified = data
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${apiUrl}users/login`, payload);
      const {result, jwToken, msg, err} = await res.data;
      if(result) {
        context.commit('setUser',result);
        context.commit('setToken', jwToken);
        cookies.set('login_cookie', res.data)
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err);
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
    async fetchProduct(context, id) {
      const res = await axios.get(`${apiUrl}product`);
      const data = await res.data
      context.commit("setProduct", data)
    },
    async fetchProducts(context) {
      const res = await axios.get(`${apiUrl}products`);
      const data = await res.data;
      if (data !== undefined) {
        context.commit("setProducts", data);
      } else context.commit("setSpinner", true);
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${apiUrl}user`);
      const data = await res.data
      context.commit("setUser", data)
    },
    async fetchUsers(context) {
      const res = await axios.get(`${apiUrl}users`);
      const data = await res.data;
      if (data !== undefined) {
        context.commit("setUsers", data);
      } else context.commit("setSpinner", true);
    },
  },
  modules: {
  }
})
