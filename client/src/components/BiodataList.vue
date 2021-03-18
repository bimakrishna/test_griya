<template>
  <form id="signup-form">
    <div class="row rounded">
        <div class="logo-bro">
            <p class="text-bio">Your Biodata</p>
        </div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Name:
                    <span class="badge badge-primary badge-pill">{{biodata.name}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Alamat:
                    <span class="badge badge-primary badge-pill">{{biodata.alamat}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Gender:
                    <span class="badge badge-primary badge-pill">{{biodata.gender}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Birthdate:
                    <span class="badge badge-primary badge-pill">{{biodata.birth_date}}</span>
                </li>
            </ul>
            <div class="col-12 form-group text-center mt-3">
                <button class="btn btn-primary btn-lg col-4" @click.prevent="editBiodataForm">Edit</button>
            </div>
        </div>
    </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BiodataList',
  props: ['biodata'],
  methods: {
    editBiodataForm () {
      if (this.$store.state.registered) {
        this.$store.commit('insertEditBiodataValue', this.biodata)
        this.$router.push(`/${this.biodata.id}`)
      } else {
        Swal.fire('register dulu ya')
      }
    }
  },
  created () {
    this.$store.dispatch('getBiodata')
  }
}
</script>

<style>
.badge {
    color: black;
}
.text-bio {
    font-size: 5em;
    font-weight: bold;
}
</style>
