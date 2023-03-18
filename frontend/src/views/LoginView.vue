<template>
  <div class="login">
    <SpinnerVue v-if="showSpinner"/>
    <form class="login-form" @submit.prevent="login" v-else>
      <button @click="history.back()" class="back-btn">
        <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/long-arrow-left.png"/>
      </button>
      <h2>Login</h2>
      <div class="mb-2">
        <input
          type="email"
          class="form-control"
          id="inputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email Address"
          required
          v-model="payload.email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-2">
        <input
          type="password"
          class="form-control"
          id="inputPassword1"
          placeholder="password"
          required
          v-model="payload.pass"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

</template>
<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
  // SethJKallis
  // uiverse.io
  components: {
    SpinnerVue
  },
  data() {
    return {
      payload: {
        email: '',
        pass: '',
      }
    }
  },
  methods: {
    async login(){
      await this.$store.commit('setSpinner', true)
      await this.$store.dispatch('login', this.payload)
      await this.$store.dispatch('fetchUsers')
      this.$router.push("/");
    }
  },
  mounted(){
    this.$store.commit('setSpinner', false)
  },
  computed: {
    showSpinner() {
      return this.$store.state.showSpinner
    }
  }
}
</script>
<style>
  .login {
  width: 500px;
  margin: 70px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 4px white;
  color: black;
}

.register-form {
  width: 90%;
  margin: auto;
}

.register-form input {
  border: 2px solid #444;
}

input, select, option {
  background-color: rgba(255, 255, 255, 0.80) !important;
}

#inputGender {
  width: 100%;
  height: 40px;
  border-radius: .375rem;
  border: 2px solid #444;
}

.back-btn {
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 5px;
}
</style>