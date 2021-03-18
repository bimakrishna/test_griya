<template>
  <div class="container-fluid h-100">
    <NavbarMain />
      <div class="row h-100 card-bio">
        <div class="col-md-4 d-flex justify-content-center align-items-center logooo">
          <img alt="Vue logo" src="../assets/logo.png" width="200">
        </div>
        <div class="col-md-8 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <BiodataList
            v-for="biodata in biodata"
            :key="biodata.id"
            :biodata="biodata"
            />
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
  computed: {
    biodata () {
      return this.$store.state.biodata
    }
  },
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
  background-color: darkgreen;
}
</style>
