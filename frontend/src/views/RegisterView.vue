<template>
  <div class="register">
    <form class="register-form" @submit.prevent="registerUser">
      <button onclick="history.back()" class="back-btn">
        <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/long-arrow-left.png"/>
      </button>
      <h2>Register</h2>
      <div class="mb-2">
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          placeholder="First Name"
          required
          v-model="payload.firstName"
        />
      </div>

      <div class="mb-2">
        <input
        type="text"
        class="form-control"
        id="inputLastName"
        placeholder="Last Name"
        required
        v-model="payload.lastName"
        />
      </div>

      <div class="mb-2">
        <input
          type="text"
          class="form-control"
          id="inputUsername"
          aria-describedby="usernameHelp"
          placeholder="Username"
          required
          v-model="payload.username"
        />
        <div id="usernameHelp" class="form-text">
          This is the name that other users will see.
        </div>
      </div>

      <div class="mb-2">
        <input
          type=""
          class="form-control"
          id="inputContactNumber"
          placeholder="Phone Number"
          required
          v-model="payload.contactNumber"
        />
      </div>

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

      <div class="mb-2">
        <input
          type="date"
          class="form-control"
          id="inputDOB"
          placeholder="Date of birth"
          required
          v-model="payload.DOB"
        />
      </div>

      <div class="mb-2">
        <select id="inputGender" required v-model="payload.genderID">
          <option value="" selected disabled hidden>Select gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>
      </div>

      <h5 class="">{{ msg }}</h5>
      <button type="submit" class="btn btn-danger">Submit</button>
      <SpinnerVue v-if="showSpinner"/>

    </form>
  </div>
</template>

<script>
import SpinnerVue from "@/components/SpinnerVue.vue";
export default {
  components: {
    SpinnerVue
  },
  data() {
    return {
      payload: {
        firstName: '',
        lastName: '',
        username: '',
        contactNumber: '',
        email: '',
        pass: '',
        DOB: '',
        genderID: ''
      }
    }
  },
  methods: {
    async registerUser() {
      this.$store.commit('setSpinner', true)
      this.$store.commit('setMessage', "Loading...")

      await this.$store.dispatch('register', this.payload)
      this.$store.commit('setMessage', "Submitting User Information...")
      
      await this.$store.dispatch('fetchUsers')
      this.$store.commit('setMessage', "Almost Done!")
      this.$router.push("/");
    },
  },
  mounted(){
    this.$store.commit('setSpinner', false)
  },
  computed: {
    showSpinner() {
      return this.$store.state.showSpinner
    },
    msg(){
      return this.$store.state.message
    }
  }
};
</script>
<style>

.register {
  max-width: 500px;
  margin: 40px auto;
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

@media only screen and (max-width: 720px) {
  .register {
    margin-top: 15px;
  }
}

</style>
