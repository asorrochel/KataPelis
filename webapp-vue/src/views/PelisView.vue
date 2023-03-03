<template>
  <div v-if="loading">
    <h1>Cargando...</h1>
  </div>
  <div v-else>
    <!-- Header -->
    <header>
      <TheHeaderMovies :peliculas="peliculas" />
    </header>
    <!-- Main-->
    <main id="movies">
      <!-- Películas-->
      <BaseContainerMovies :peliculas="peliculas" />
    </main>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

import BaseContainerMovies from '@/components/BaseContainerMovies.vue'
import TheHeaderMovies from '@/components/TheHeaderMovies.vue'

const peliculas = ref([])
const loading = ref(true)

//cambiar el fondo del body
const changeBodyBackground = () => {
  const body = document.querySelector('body')
  body.style.backgroundImage = 'none'
}

const randomMovies = ref(['star', 'avengers', 'harry', 'batman', 'superman'])
const randomNumber = Math.floor(Math.random() * randomMovies.value.length)

//obtener las peliculas
const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${randomMovies.value[randomNumber]}&apikey=ab64c929`,
    )
    peliculas.value = data.Search
    loading.value = false
  } catch (error) {
    return error
  }
}

getData()
changeBodyBackground()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

body {
  position: relative;
  /* los elementos se posicionan en relación a su padre */
  width: 100%;
  height: 100vh;
  background: rgb(23, 23, 23);
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

header {
  position: absolute;
  top: 50px;
  left: 155px;
  min-width: 80%;
  min-height: 80%;
  /* border: 1px solid #fff;  */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 25px -10px;
}

main {
  position: absolute;
  top: 105%;
  left: 125px;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  /* border: 1px solid #fff;   */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: wrap;
  padding: 20px 0px;
}

@media (max-width: 768px) {
  header {
    min-width: 90%;
    min-height: 90%;
  }

  main {
    top: 170%
  }

  header nav {
    min-height: 15%;
    padding: 0px 20px;
  }

  header nav .logo_ul img {
    margin-left: 0px;
  }

  header nav .logo_ul ul li {
    padding: 3px 10px;
  }

  header nav .search_user input {
    padding: 3px 5px;
    margin-right: 5px;
  }

  header nav .search_user img {
    width: 20px;
    height: 20px;
  }

  header nav .search_user .search {
    width: 280px;
    height: 170px;
    top: 30px;
  }

  header nav .search_user .search .card .img {
    width: 25px;
  }

  header nav .search_user .search .card .cont h3 {
    font-size: 13px;
    width: 200px;
  }
}


@media only screen and (max-width: 1400px) {
  main {
    top: 110%;
    height: auto;
  }
}

@media only screen and (max-width: 590px) {
  header {
    height: 80px;
    font-size: 16px;
  }

  main {
    top: 110%;
    height: auto;
  }


  .box .box-img {
    width: 100%;
    height: 240px;
    margin-bottom: 78px;
  }
}

@media only screen and (max-width: 535px) {
  header {
    height: 80px;
    font-size: 16px;
  }

  main {
    top: 110%;
    height: auto;
  }


  .box .box-img {
    width: 100%;
    height: 170px;
    margin-bottom: 78px;
  }
}
</style>
