<template>
  <section class="movies">
    <h2 class="heading">Películas</h2>
    <PaginateMovie
      class="mb-2"
      @next="nextPost"
      @prev="prevPost"
      :inicio="postInicio"
      :fin="postFin"
      :maxLength="maxLength"
    />
    <!-- Contenedor Cards Películas-->
    <div class="movies-container">
      <div
        class="box"
        v-for="peli in peliculas.slice(postInicio, postFin)"
        :key="peli.imdbID"
      >
        <div class="box-img">
          <RouterLinkMovie :peli="peli" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import RouterLinkMovie from '@/components/RouterLinkMovie.vue'
import PaginateMovie from '@/components/PaginateMovie.vue'

const postXPage = 3
const postInicio = ref(0)
const postFin = ref(postXPage)

const props = defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})

const nextPost = () => {
  postInicio.value += postXPage
  postFin.value += postXPage
}

const prevPost = () => {
  postInicio.value -= postXPage
  postFin.value -= postXPage
}

const maxLength = computed(() => props.peliculas.length)
</script>

<style scoped>
.heading {
  font-size: 40px;
  font-weight: bold;
  background-image: linear-gradient(45deg, #00ffff, #00ff00);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  max-width: 80%x;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  margin-bottom: 21px;
  margin-top: -40px;
}

.movies-container {
  width: 100%;
  height: 100%;
  left: 124px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box {
  width: 300px;
  height: 450px;
  margin-top: 45px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.box:hover {
  border-width: 0px;
  transform: scale(1.1) rotateZ(-2deg);
  box-shadow: -4px 4px 16px #00ffff, 4px -4px 16px #00ff00; /* sombra */
  transition: 0.3s linear;
}

.box .box-img {
  width: 80%;
  height: 270px;
}

.box .box-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.box .box-img:hover {
  transition: 0.3s linear;
}

.box .box-img:hover img {
  transform: scale(1.1) rotateZ(-2deg);
  transition: 0.3s linear;
}
</style>
