<template>
  <div class="container-fluid h-100">
    <NavbarMain />
      <div class="row h-100 card-bio">
        <div class="col-md-4 d-flex justify-content-center align-items-center logooo">
          <img alt="Vue logo" src="../assets/logo.png" width="200">
        </div>
        <div class="col-md-8 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 px-5 py-4 shadow bg-white text-left ceking">
            <BiodataList />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarMain from '../components/NavbarMain'
import BiodataList from '../components/BiodataList'
export default {
  name: 'Home',
  created () {
    this.$store.dispatch('getBiodata')
  },
  components: {
    BiodataList,
    NavbarMain
  },
  mounted () {
    this.$store.dispatch('getBiodata')
    if (localStorage.getItem('token')) {
      this.$store.commit('isRegister', true)
    } else {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
.card-bio {
  margin-top: 100px;
}
.logooo {
  box-shadow: 0px 5px 15px rgba(0,0,0, .5);
  background-image: url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80');
  opacity: 70%;
  border-top-right-radius: 40px;
}
.ceking {
  border-bottom-left-radius: 50px;
}
</style>
