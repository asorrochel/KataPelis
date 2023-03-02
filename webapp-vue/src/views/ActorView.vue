<template>
  <h1>{{ ActorNombre }}</h1>
  <ul>
    <li v-for="movie in ActorKnownFor" :key="movie.id">
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
    </li>
  </ul>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const actorInfo = ref(null)
const ActorNombre = ref(null)
const ActorKnownFor = ref(null)

//obtener datos de la película
const getActorData = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=77c35a5cc4003ff39a559f7f2aaaf216&query=${route.params.name}`,
  )
  actorInfo.value = data.results[0]
  ActorNombre.value = actorInfo.value.name
  ActorKnownFor.value = actorInfo.value.known_for
}

const changeBodyBackground = () => {
  const body = document.querySelector('body')
  body.style.backgroundImage = 'none'
}

changeBodyBackground()
getActorData()
</script>
<style scoped>
h1 {
  text-align: center;
  margin: 1rem;
  color: white;
}
ul {
  top: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem;
}

img {
  width: 200px;
  height: 300px;
  border-radius: 10px;
}
</style>
