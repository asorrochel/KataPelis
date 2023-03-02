<template>
  <div class="movie-cast">
    <div class="header">Reparto</div>
    <div class="list">
      <div class="cast" v-for="(actor, index) in actorsWithImages" :key="index">
        <RouteLinkActor :actor="actor" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import RouteLinkActor from '@/components/RouterLinkActor.vue'

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


</style>
