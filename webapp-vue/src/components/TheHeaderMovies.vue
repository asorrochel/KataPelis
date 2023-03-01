<template>
  <video src="/jurasicworld.webm" autoplay muted loop></video>
  <!-- Navegador-->
  <nav>
    <TheNavPelis />
  </nav>
  <!-- Película Portada-->
  <PortadaMovie />
  <!-- Películas Populares-->
  <PopularMoviesSlider :peliculas="peliculas" />
</template>

<script setup>
import PortadaMovie from '@/components/PortadaMovie.vue'
import PopularMoviesSlider from '@/components/PopularMoviesSlider.vue'
import TheNavPelis from '@/components/TheNavPelis.vue'

defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})
</script>
<style scoped>
header video {
  position: absolute;
  left: -100%;
  right: -100%;
  top: -105%;
  bottom: -100%;
  margin: auto;
  min-height: 120%;
  min-width: 100%;
  z-index: -1;
}
header nav {
  position: absolute;
  min-width: 100%;
  min-height: 10%;
  /* border: 1px solid #fff;  */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
}
</style>
