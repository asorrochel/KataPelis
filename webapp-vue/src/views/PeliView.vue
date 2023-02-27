<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
// const router = useRouter()

const peli = ref(null)

// const back = () => {
//   router.push('/')
// }

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${route.params.imdbID}&apikey=ab64c929`,
    )
    peli.value = data

    const posterUrl = peli.value.Poster

    document.body.style.backgroundImage = `url(${posterUrl})`
  } catch (error) {
    console.log(error)
    peli.value = null
  }
}

getData()
</script>

<template>
  <div v-if="peli" class="container">
    <!--Poster-->
    <div class="poster">
      <img :src="peli.Poster" alt="" />
    </div>
    <!--Info Película-->
    <div class="info">
      <div class="movie-title">{{ peli.Title }}</div>
      <!--Detalles Película-->
      <div class="movie-detail">
        <div class="set">
          <label>Fecha Estreno</label>
          <span>{{ peli.Year }}</span>
        </div>
        <div class="set">
          <label>Duración</label>
          <span>{{ peli.Runtime }}</span>
        </div>
        <div class="set">
          <label>Género</label>
          <span>{{ peli.Genre }}</span>
        </div>
        <div class="set">
          <label>IMDB</label>
          <span>{{ peli.imdbRating }}</span>
        </div>
        <!--Botones-->
        <div class="set">
          <a id="trailer" href="#" target="_blank"
            >Trailer
            <i class="bi bi-play-fill"></i>
          </a>
          <a
            id="imdb"
            :href="`https://www.imdb.com/title/${peli.imdbID}`"
            target="_blank"
            >IMDB
          </a>
        </div>
      </div>
      <!--Sinopsis-->
      <div class="movie-description">
        {{ peli.Plot }}
      </div>
      <!--Reparto-->
      <div class="movie-cast">
        <div class="header">Reparto</div>
        <div class="list">
          <div class="cast">
            <img src="#" alt="" />
            <label>Kelly Marie Tran</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 v-else>No existe la película</h1>
</template>

<style>
@import '../assets/peli.css';
</style>
