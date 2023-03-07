import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePeliDetailsStore = defineStore('peliDetails', () => {
  const CACHE_TIME = 120000
  const ERROR_SERVER = 'Error del servidor'
  const loading = ref(true)
  const error = ref(null)
  const peli = ref(null)
  const actors = ref(null)
  const lastPeliDetails = ref(null)
  const lastFetchTime = ref(0)

  const fetchPeliDetails = async url => {
    loading.value = true
    error.value = null
    peli.value = null
    actors.value = null
    lastPeliDetails.value = null
    lastFetchTime.value = 0

    try {
      const currentTime = Date.now()
      if (
        lastPeliDetails.value &&
        currentTime - lastFetchTime.value < CACHE_TIME
      ) {
        // utilizar la información almacenada en el store
        peli.value = lastPeliDetails.value.peli
        actors.value = lastPeliDetails.value.actors
      } else {
        // hacer una nueva llamada al API
        const { data } = await axios.get(url)
        peli.value = data
        actors.value = peli.value.Actors.split(', ')
        // almacenar la información en el store
        lastPeliDetails.value = { peli: peli.value, actors: actors.value }
        lastFetchTime.value = currentTime
      }
    } catch (e) {
      error.value = ERROR_SERVER
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
