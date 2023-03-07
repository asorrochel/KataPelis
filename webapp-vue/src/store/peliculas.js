import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePeliculasStore = defineStore('peliculas', () => {
  const peliculas = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const ERROR_MESSAGE = 'Error del servidor'

  const fetchPeliculas = async url => {
    loading.value = true
    try {
      const { data } = await axios.get(url)
      peliculas.value = data.Search
    } catch (e) {
      console.log(e)
      error.value = ERROR_MESSAGE
    } finally {
      loading.value = false
    }
  }

  return {
    peliculas,
    loading,
    error,
    fetchPeliculas,
  }
})
