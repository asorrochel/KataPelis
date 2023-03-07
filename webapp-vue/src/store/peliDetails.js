import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePeliDetailsStore = defineStore('peliDetails', () => {
  const loading = ref(true)
  const error = ref(null)
  const peli = ref(null)
  const actors = ref(null)

  const fetchPeliDetails = async url => {
    loading.value = true
    try {
      const { data } = await axios.get(url)
      peli.value = data
      //separar los actores por comas y meterlos en un array
      actors.value = peli.value.Actors.split(', ')
    } catch (e) {
      error.value = 'Error del servidor'
      peli.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    peli,
    actors,
    loading,
    error,
    fetchPeliDetails,
  }
})
