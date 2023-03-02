<template>
  <!--Poster-->
  <div class="poster">
    <img :src="peli.Poster" :alt="peli.name" />
  </div>
  <!--Info Película-->
  <div class="info">
    <MovieInfo :peli="peli" :actors="actors" />
  </div>
</template>

<script setup>
import MovieInfo from '@/components/MovieInfo.vue'
defineProps({
  peli: {
    type: Object,
    required: true,
  },
  actors: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.info {
  padding-top: 24px;
  padding-left: 24px;
}

.poster {
  width: 480px;
  height: 100vh;
  overflow: hidden; /* ocultar contenido que sobrepase el tamaño del contenedor */
}

.poster img {
  width: 480px;
  height: 100vh;
  object-fit: cover; /* ajustar imagen al tamaño del contenedor */
  overflow: hidden;
  transition: all 1.5s ease-in-out;
}

.poster img:hover {
  transform: scale(1.35) rotateZ(5deg); /* aumentar tamaño y rotar imagen */
}

/*todos los divs dentro de .info */
.info > div {
  margin-top: 32px;
  margin-bottom: 32px;
  margin-right: 32px;
}
</style>
