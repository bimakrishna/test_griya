import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registered: false,
    biodata: [],
    editBiodataValue: {}
  },
  mutations: {
    isRegister (state, payload) {
      state.registered = payload
    },
    insertBiodata (state, payload) {
      state.biodata = payload
    },
    insertEditBiodataValue (state, payload) {
      state.editBiodataValue = payload
    }
  },
  actions: {
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          username: payload.username,
          password: payload.password,
          repassword: payload.repassword
        }
      })
    },
    getBiodata (context) {
      axios({
        method: 'GET',
        url: '/biodata',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          context.commit('insertBiodata', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBiodata (context, payload) {
      return axios({
        method: 'POST',
        url: '/biodata',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          alamat: payload.alamat,
          gender: payload.gender,
          birth_date: payload.birth_date
        }
      })
    },
    editBiodata (context, payload) {
      return axios({
        method: 'PUT',
        url: '/biodata/' + payload.id,
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name,
          alamat: payload.alamat,
          gender: payload.gender,
          birth_date: payload.birth_date
        }
      })
    },
    deleteBiodata (context, id) {
      return axios({
        method: 'DELETE',
        url: '/biodata/ + id',
        headers: { token: localStorage.getItem('token') }
      })
    },
    logout (context) {
      localStorage.clear()
      context.commit('isRegister', false)
    }
  },
  modules: {
  }
})
