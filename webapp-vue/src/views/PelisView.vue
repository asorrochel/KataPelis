<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const peliculas = ref([])
const peliculas2 = ref([])

const getData = async () => {
  try {
    const { data } = await axios.get(
      'https://www.omdbapi.com/?s=star&apikey=ab64c929',
    )
    peliculas.value = data.Search
  } catch (error) {
    console.log(error)
  }
}
//FIXME: No funciona la busqueda
const getDataSearch = async () => {
  try {
    const pelicula = document.getElementById('search_input').value
    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${pelicula}&apikey=ab64c929`,
    )
    peliculas2.value = data.Search
  } catch (error) {
    console.log(error)
  }
}

getData()
// getDataSearch()
</script>

<template>
  <!-- Header -->
  <header>
    <video src="../../public/jurasicworld.webm" autoplay muted loop></video>
    <!-- Navegador-->
    <nav>
      <div class="logo_ul">
        <img src="/logo.png" alt="logo" />
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#movies">Películas</a>
          </li>
        </ul>
      </div>
      <!-- Search Input -->
      <div class="search_user">
        <input type="text" placeholder="Buscar..." id="search_input" />
        <!-- Usuario -->
        <img class="user_img" src="../../public/user.jpg" alt="search" />
        <!-- Search Items-->
        <div class="search">
          <router-link
            :to="`/${peli.imdbID}`"
            v-for="peli in peliculas2"
            :key="peli.imdbID"
            class="card"
          >
            <img class="film_img" :src="peli.Poster" :alt="peli.Title" />
            <div class="cont">
              <h3>{{ peli.Title }}</h3>
              <p>
                {{ peli.Genre }}, {{ peli.Year }} <span>IMDB</span
                ><i class="bi bi-star-fill">{{ peli.imdbRating }}</i>
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- Header Content Película Portada-->
    <div class="content">
      <h1>Jurassic World</h1>
      <p>
        Un nuevo parque temático, construido en el emplazamiento original de
        Jurassic Park, crea un dinosaurio híbrido modificado genéticamente, el
        Indominus rex, que escapa a la contención y se lanza a la matanza.
      </p>
      <div class="details">
        <h6>Una película de Steven Spielberg</h6>
        <h5 id="gen">Acción</h5>
        <h4>2015</h4>
        <h3 id="rate"><span>IMDB</span><i class="bi bi-star-fill">6.9</i></h3>
      </div>
      <!-- Botones-->
      <div class="btns">
        <a
          href="https://www.imdb.com/video/vi1176612889/?playlistId=tt0369610&ref_=tt_ov_vi"
          id="trailer"
          target="_blank"
          >Trailer <i class="bi bi-play-fill"></i
        ></a>
        <a
          href="https://www.imdb.com/title/tt0369610/?ref_=vp_close"
          id="imdb"
          target="_blank"
          >IMDB</a
        >
      </div>
    </div>
    <!-- Header Películas Populares-->
    <section>
      <h4>Popular</h4>
      <i class="bi bi-chevron-left"></i>
      <i class="bi bi-chevron-right"></i>
      <!-- Cards Películas-->
      <div class="cards">
        <router-link
          v-for="peli in peliculas"
          :key="peli.imdbID"
          :to="`/${peli.imdbID}`"
          class="card"
        >
          <img :src="peli.Poster" :alt="peli.Title" />
          <div class="rest_card">
            <img :src="peli.Poster" alt="" />
            <div class="cont">
              <h4>{{ peli.Title }}</h4>
              <div class="sub">
                <p>{{ peli.Year }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </header>
  <!-- Main-->
  <main id="movies">
    <section class="movies">
      <h2 class="heading">Películas</h2>
      <!-- Contenedor Cards Películas-->
      <div class="movies-container">
        <div class="box" v-for="peli in peliculas" :key="peli.imdbID">
          <div class="box-img">
            <router-link :to="`/${peli.imdbID}`">
              <img :src="peli.Poster" alt="" />
              <h3>{{ peli.Title }}</h3>
              <span>{{peli.Year}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@import '../assets/pelis.css';
</style>
