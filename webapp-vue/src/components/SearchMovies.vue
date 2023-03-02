<template>
  <div class="search_user">
    <input
      type="text"
      placeholder="Buscar..."
      id="search_input"
      @input="getDataSearch"
    />
    <!-- Usuario -->
    <img class="user_img" src="/user.jpg" alt="search" />
    <!-- Search Items-->
    <div class="search">
      <RouteLinkSearchMovie :peliculas="peliculas" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import RouteLinkSearchMovie from '@/components/RouteLinkSearchMovie.vue'

const peliculas = ref([])

const getDataSearch = async () => {
  try {
    const pelicula = document.getElementById('search_input').value
    console.log(pelicula.value)
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${pelicula}&apikey=ab64c929`,
    )
    peliculas.value = data.Search
  } catch (error) {
    return error
  }
}

getDataSearch()
</script>
<style scoped>
header nav .search_user {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

header nav .search_user input {
  padding: 3px 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: rgb(255, 255, 255, 0.3);
  color: #fff;
  margin-right: 10px;
}

header nav .search_user input::placeholder {
  color: #fff;
}

header nav .search_user img {
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 50%;
}

header nav .search_user .search {
  position: absolute;
  width: 320px;
  height: 190px;
  /* border: 1px solid #fff;  */
  right: 0;
  top: 40px;
  z-index: 99999;
  overflow-y: auto;
}

header nav .search_user .search::-webkit-scrollbar {
  width: 5px;
  background: rgb(255, 255, 255, 0.3);
  border-radius: 5px;
  visibility: hidden;
}

header nav .search_user .search::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(255, 255, 255, 0.3);
  border-radius: 5px;
  visibility: hidden;
}

header nav .search_user .search:hover::-webkit-scrollbar {
  visibility: visible;
}

header nav .search_user .search:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}
</style>
