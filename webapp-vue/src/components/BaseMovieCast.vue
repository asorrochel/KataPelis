<template>
  <div class="movie-cast">
    <div class="header">Reparto</div>
    <div class="list">
      <div class="cast" v-for="(actor, index) in actorsWithImages" :key="index">
        <img
          :src="`https://image.tmdb.org/t/p/original${actor.image}`"
          :alt="actor.name"
        />
        <label>{{ actor.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { defineProps } from 'vue'

const props = defineProps({
  actors: {
    type: Array,
    required: true,
  },
})

const actorsWithImages = ref([])

const getActorData = async actors => {
  const actorR = []
  for (const actor of actors) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=77c35a5cc4003ff39a559f7f2aaaf216&query=${actor}`
    )
    actorR.push(...data.results)
  }
  return actorR
}

const fetchActorImages = async () => {
  const actorR = await getActorData(props.actors)
  for (const actor of actorR) {
    console.log(actor.profile_path)
    if (actor.profile_path !== null) {
      actorsWithImages.value.push({
        name: actor.name,
        image: actor.profile_path,
      })
    }
  }
}

fetchActorImages()
</script>

<style scoped>
.movie-cast {
  position: relative;
  top: 37px;
}
.movie-cast .header {
  font-size: 24px;
  margin-bottom: 24px;
}

.movie-cast .list {
  display: grid;
  grid-template-columns: repeat(6, 120px);
  grid-gap: 32px;
}

.movie-cast .cast {
  width: 120px;
  height: 160px;
  cursor: pointer;
}

.movie-cast img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid #cccccc;
}

.movie-cast .cast:hover img {
  border-width: 0px;
  transform: scale(1.1) rotateZ(-2deg);
  box-shadow: -4px 4px 16px #00ffff, 4px -4px 16px #00ff00; /* sombra */
}

.movie-cast label {
  margin-top: 8px;
  display: block;
}

.movie-cast .cast:hover label {
  margin-top: 24px;
  color: #00ff00;
  font-weight: medium;
}
</style>
