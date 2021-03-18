<template>
  <div class="container-fluid h-100">
      <div class="row h-100 card-reg">
        <div class="col-md-4 d-flex justify-content-center align-items-center logo-reg">
          <img alt="Vue logo" src="../assets/logo.png" width="200">
        </div>
        <div class="col-md-8 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 px-5 py-4 shadow bg-white text-left reg-box">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/RegisterForm'
export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>
.card-reg {
  margin-top: 100px;
}
.logo-reg {
  background-color: darkred;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0,0,0, .5);
}
.reg-box {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0,0,0, .5);
}
</style>
