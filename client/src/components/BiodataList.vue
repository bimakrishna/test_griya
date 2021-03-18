<template>
  <form id="signup-form">
    <div class="row rounded cobadulu">
        <div class="logo-bro">
            <p class="text-bio">Your Biodata</p>
        </div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Name:
                    <span class="badge badge-primary badge-pill">{{biodata[0].name}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Alamat:
                    <span class="badge badge-primary badge-pill">{{biodata[0].alamat}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Gender:
                    <span class="badge badge-primary badge-pill">{{biodata[0].gender}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Birthdate:
                    <span class="badge badge-primary badge-pill">{{biodata[0].birth_date}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center" disabled>
                    Date:
                    <span class="badge badge-primary badge-pill">{{new Date(biodata[0].createdAt).toISOString().split('T')[0]}}</span>
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
  computed: {
    biodata () {
      return this.$store.state.biodata
    }
  },
  methods: {
    editBiodataForm () {
      if (this.$store.state.registered) {
        this.$store.commit('insertEditBiodataValue', this.biodata[0])
        this.$router.push(`/${this.biodata[0].id}`)
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
.cobadulu {
  border-bottom-left-radius: 50px;
}
</style>
