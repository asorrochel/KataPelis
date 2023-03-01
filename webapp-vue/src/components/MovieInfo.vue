<template>
  <div class="movie-title">{{ peli.Title }}</div>
  <!--Detalles Película-->
  <div class="movie-detail">
    <div class="set">
      <label>Fecha Estreno</label>
      <span>{{ peli.Year }}</span>
    </div>
    <div class="set">
      <label>Duración</label>
      <span>{{ peli.Runtime }}</span>
    </div>
    <div class="set">
      <label>Género</label>
      <span>{{ peli.Genre }}</span>
    </div>
    <div class="set">
      <label>IMDB</label>
      <span>{{ peli.imdbRating }}</span>
    </div>
    <!--Sinopsis-->
    <div class="movie-description">
      {{ peli.Plot }}
    </div>
    <!--Botones-->
    <div class="set">
      <ButtonPeli :peli="peli" />
    </div>
    <!--REPARTO-->
    <MovieCast :actors="actors" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import MovieCast from '@/components/BaseMovieCast.vue'
import ButtonPeli from '@/components/ButtonPeli.vue'

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
.movie-title {
  font-size: 64px;
  font-weight: bold;
  background-image: linear-gradient(45deg, #00ffff, #00ff00);
  background-clip: text; /* Solo se aplica al texto */
  -webkit-background-clip: text;
  color: transparent; /* texto transparente para poder mostrar el degradado*/
}

.movie-detail .set {
  display: inline-block; /* para que se muestren en linea */
  margin-right: 64px;
}

.movie-detail label {
  font-size: 14px;
  color: #ededed;
  display: block;
}

.movie-detail span {
  font-size: 22px;
}

.movie-description {
  line-height: 24px;
}
</style>
