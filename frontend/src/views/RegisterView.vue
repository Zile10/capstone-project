<template>
  <div class="register">
    <form class="register-form">
      <h2>Register</h2>
      <div class="mb-2">
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          placeholder="First Name"
          required
          v-bind="firstName"
        />
      </div>

      <div class="mb-2">
        <input
        type="text"
        class="form-control"
        id="inputLastName"
        placeholder="Last Name"
        required
        v-bind="lastName"
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
          v-bind="username"
        />
        <div id="usernameHelp" class="form-text">
          This is the name that other users will see.
        </div>
      </div>

      <div class="mb-2">
        <input
          type="text"
          class="form-control"
          id="inputContactNumber"
          placeholder="Phone Number"
          required
          v-bind="contactNumber"
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
          v-bind="email"
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
          v-bind="pass"
        />
      </div>

      <div class="mb-2">
        <input
          type="date"
          class="form-control"
          id="inputDOB"
          placeholder="Date of birth"
          required
          v-bind="DOB"
        />
      </div>

      <div class="mb-2">
        <select id="inputGender" required v-bind="genderID">
          <option value="" selected disabled hidden>Select gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>
      </div>

      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->

      <button @click.prevent="toHome" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
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
    async toHome() {
      await this.$store.dispatch('register', this.payload) 
      await this.$store.dispatch('fetchUsers')
      this.$router.push("/");
    },
  },
};
</script>
<style>
.register {
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
</style>
