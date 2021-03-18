<template>
  <div class="navbar mt-2">
      <ul class="nav">
        <li class="nav-item">
            <a @click.prevent="addToRegister" class="nav-link text-warning" href="#">Register</a>
        </li>
        <li class="nav-item">
            <a @click.prevent="logout" class="nav-link text-danger" href="#">Logout</a>
        </li>
      </ul>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'NavbarMain',
  methods: {
    addToRegister () {
      if (this.$store.state.registered) {
        Swal.fire({
          title: 'Logout dulu dong',
          icon: 'warning'
        })
        this.$store.push('/')
      }
    },
    logout () {
      Swal.fire({
        title: 'Yakin keluar ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, keluar!'
      })
        .then((result) => {
          if (result.isConfirmed) {
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
              title: 'Logout successfully'
            })
            localStorage.clear()
            this.$store.commit('isRegister', false)
            this.$router.push('/register')
          }
        })
    }
  }
}
</script>

<style>
.navbar {
    border-radius: 20px;
    background-image: url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80');
    opacity: 70%;
    justify-content: flex-end;
    box-shadow: 0px 5px 15px rgba(0,0,0, .5);
}
.nav-link{
    font-weight: bold;
    font-size: 1em;
}
</style>
