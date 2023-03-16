<template>
  <div class="register">
    <form class="register-form">
      <h2>Register</h2>
      <div class="mb-3">
        <!-- <label for="inputFirstName" class="form-label">First Name</label> -->
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          placeholder="First Name"
        />
      </div>

      <div class="mb-3">
        <!-- <label for="inputLastName" class="form-label">Last Name</label> -->
        <input
          type="text"
          class="form-control"
          id="inputLastName"
          placeholder="Last Name"
        />
      </div>

      <div class="mb-3">
        <!-- <label for="inputUsername" class="form-label">Username</label> -->
        <input
          type="text"
          class="form-control"
          id="inputLastName"
          aria-describedby="usernameHelp"
          placeholder="Username"
        />
        <div id="usernameHelp" class="form-text">
          This is the name that other users will see.
        </div>
      </div>

      <div class="mb-3">
        <!-- <label for="inputEmail1" class="form-label">Email address</label> -->
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email Adress"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3">
        <!-- <label for="inputPassword1" class="form-label">Password</label> -->
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="password"
        />
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
  methods: {
    toHome() {
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
</style>
