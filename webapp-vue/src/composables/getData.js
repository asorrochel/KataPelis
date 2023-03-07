import { ref } from 'vue'
import axios from 'axios'

export const useGetData = () => {
  const peliculas = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const peli = ref(null)
  const actors = ref(null)

  const getDataPelis = async url => {
    loading.value = true
    try {
      const { data } = await axios.get(url)
      peliculas.value = data.Search
    } catch (e) {
      console.log(e)
      error.value = 'Error del servidor'
    } finally {
      loading.value = false
    }
  }
  const getDataPeli = async url => {
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
    getDataPelis,
    getDataPeli,
    peliculas,
    loading,
    error,
    peli,
    actors,
  }
}
