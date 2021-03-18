<template>
  <div class="container-fluid h-100">
      <div class="row h-100 card-form">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img alt="Vue logo" src="../assets/logo.png" width="200">
        </div>
        <div class="col-md-8 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <form id="signup-form" @submit.prevent="addBiodata">
              <div class="row rounded">
                <div class="logo-bro">
                    <p class="text-logo">FORM !</p>
                </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Name <span class="text-danger"> *</span> </label>
                      <input type="text" class="form-control" v-model="formBiodataPayload.name">
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Alamat<span class="text-danger"> *</span> </label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formBiodataPayload.alamat"></textarea>
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Gender<span class="text-danger"> *</span> </label>
                      <select class="form-control" id="exampleFormControlSelect1" v-model="formBiodataPayload.gender">
                        <option disabled>Any</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Birth Date<span class="text-danger"> *</span> </label>
                      <input type="date" class="form-control" v-model="formBiodataPayload.birth_date">
                  </div>
                  <div class="col-12 form-group text-center mt-3">
                      <button class="btn btn-primary btn-lg col-4 ">Save</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BiodataForm',
  data () {
    return {
      formBiodataPayload: {
        name: '',
        alamat: '',
        gender: '',
        birth_date: ''
      }
    }
  },
  methods: {
    addBiodata () {
      this.$store.dispatch('addBiodata', this.formBiodataPayload)
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Yakin nih mau begini aja form nya ?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('getBiodata')
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
              title: 'Your Bio is finish'
            })
            this.$router.push('/')
            this.formBiodataPayload.name = ''
            this.formBiodataPayload.alamat = ''
            this.formBiodataPayload.gender = ''
            this.formBiodataPayload.birth_date = ''
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'oopppsss',
            text: err.response.data.message + '!'
          })
        })
    }
  },
  created () {
    this.$store.dispatch('getBiodata')
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card-form {
  margin-top: 100px;
}
</style>
