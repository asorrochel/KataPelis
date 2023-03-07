<template>
  <div v-if="loading">
    <h1>Cargando...</h1>
  </div>
  <div v-else>
    <div class="container">
      <!--Película-->
      <MovieC :peli="peli" :actors="actors" />
    </div>
    <h1 v-if="peli === null && actors === null">No existe la película</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePeliDetailsStore } from '@/store/peliDetails'

import MovieC from '@/components/MovieC.vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const usePeliDetails = usePeliDetailsStore()
const { peli, actors, loading } = storeToRefs(usePeliDetails)
const { fetchPeliDetails } = usePeliDetails

//cambiar el fondo de la página por la imagen de la película
const changeBackground = () => {
  const posterUrl = peli.value.Poster
  const body = document.querySelector('body')
  body.classList.add('movie-page')
  body.style.backgroundImage = `url(${posterUrl})`
  body.style.backgroundRepeat = 'no-repeat'
  body.style.backgroundSize = 'cover'
  body.style.backgroundPosition = 'center center'
}

const fetchMovies = async () => {
  await fetchPeliDetails(
    `https://www.omdbapi.com/?i=${route.params.imdbID}&apikey=ab64c929`,
  )
  changeBackground()
}

fetchMovies()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  transition: all 0.35s linear;
}

movie-page {
  min-height: 100vh;
}

.container {
  max-width: 110%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 480px 1fr;
  /* 1 columna 480px, 2 columna el resto*/
  grid-gap: 32px;
  /* separacion entre columnas */
  backdrop-filter: blur(12px) contrast(80%);
  /* efecto de desenfoque */
  color: white;
}

/* style the elements for small screens */
@media screen and (max-width: 500px) {
  .container {
    grid-template-columns: 100%;
    backdrop-filter: blur(12px) contrast(80%);
  }

  .movie-title {
    font-size: 32px;
    /* reduce the font size */
  }

  .movie-detail .set {
    display: inline-block;
    margin-right: 30px;
    /* reduce the margin */
  }

  .movie-detail label {
    font-size: 12px;
    /* reduce the font size */
  }

  .movie-detail span {
    font-size: 18px;
    /* reduce the font size */
  }

  .movie-cast .header {
    font-size: 18px;
    /* reduce the font size */
    margin-bottom: 16px;
    /* reduce the margin */
  }

  .movie-cast .list {
    grid-template-columns: repeat(3, 1fr);
    /* use 3 columns */
    grid-gap: 10px;
    /* reduce the gap */
  }

  .movie-cast .cast {
    width: 100px;
    /* reduce the width */
    height: 140px;
    /* reduce the height */
  }

  .movie-cast label {
    display: none;
  }

  .movie-description {
    font-size: 12px;
  }

  .poster {
    display: none;
  }

  #imdb {
    position: relative;
    left: 170px;
    top: -20px;
  }

  #trailer {
    position: relative;
    left: 170px;
    top: -20px;
  }
}
</style>
