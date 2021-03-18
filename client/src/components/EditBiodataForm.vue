<template>
  <div class="container-fluid h-100">
      <div class="row h-100 card-bio">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img alt="Vue logo" src="../assets/logo.png" width="200">
        </div>
        <div class="col-md-8 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <form id="signup-form">
              <div class="row rounded">
                <div class="logo-bro">
                    <p class="text-logo">Edit Yours  !</p>
                </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Name <span class="text-danger"> *</span> </label>
                      <input v-model="editBiodataPayload.name" type="text" class="form-control">
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Alamat<span class="text-danger"> *</span> </label>
                      <textarea v-model="editBiodataPayload.alamat" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Gender<span class="text-danger"> *</span> </label>
                      <select v-model="editBiodataPayload.gender" class="form-control" id="exampleFormControlSelect1">
                        <option disabled>Any</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                  </div>
                  <div class="col-12 form-group">
                      <label class="col-form-label col-form-label-lg">Birth Date<span class="text-danger"> *</span> </label>
                      <input v-model="editBiodataPayload.birth_date" type="date" class="form-control">
                  </div>
                  <div class="col-12 form-group text-center mt-3">
                      <button @click.prevent="editBiodata" class="btn btn-primary btn-lg col-4 ">Save</button>
                      <button @click.prevent="cancelButton" class="btn btn-warning btn-lg col-4 can-btn">Cancel</button>
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
  name: 'EditBiodataForm',
  props: ['biodata'],
  data () {
    return {
      editBiodataPayload: {
        id: '',
        name: '',
        alamat: '',
        gender: '',
        birth_date: ''
      }
    }
  },
  computed: {
    editBiodataValue () {
      return this.$store.state.editBiodataValue
    }
  },
  created () {
    this.editBiodataPayload.id = this.$route.params.id
    this.editBiodataPayload.name = this.editBiodataValue.name
    this.editBiodataPayload.alamat = this.editBiodataValue.alamat
    this.editBiodataPayload.gender = this.editBiodataValue.gender
    this.editBiodataPayload.birth_date = this.editBiodataValue.birth_date
  },
  methods: {
    editBiodata () {
      this.$store.dispatch('editBiodata', this.editBiodataPayload)
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Save nih ?',
        showCancelButton: true,
        confirmButtonText: 'Yakin'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('getBiodata')
            this.$router.push('/')
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'oooppss',
            text: err.response.data.message + '!'
          })
        })
    },
    cancelButton () {
      this.$store.dispatch('getBiodata')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.can-btn {
    margin-left: 5px;
}
.card-bio {
  margin-top: 100px;
}
</style>
