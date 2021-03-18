<template>
    <form id="signup-form" @submit.prevent="register">
        <div class="row rounded ">
            <div class="logo-bro">
                <p class="text-logo">WELCOME !</p>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Username <span class="text-danger"> *</span> </label>
                <input type="text" class="form-control" v-model="registerPayload.username">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Password<span class="text-danger"> *</span> </label>
                <input type="password" class="form-control" v-model="registerPayload.password">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Re-Password<span class="text-danger"> *</span> </label>
                <input type="password" class="form-control" v-model="registerPayload.repassword">
            </div>
            <div class="col-12 form-group text-center mt-3">
                <button class="btn btn-primary btn-lg col-4 ">Register</button>
            </div>
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'RegisterForm',
  data () {
    return {
      registerPayload: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.registerPayload)
        .then((result) => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('user', result.data.username)
          this.$store.commit('isRegister', true)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.$router.push('/form')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.msg + '!'
          })
        })
    }
  }
}
</script>

<style>
.logo-bro {
    text-align: center;
}
.text-logo {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3em;
    font-weight: bold;
}
.btn-primary {
    background: darkgreen;
    font-weight: bold;
}
</style>
