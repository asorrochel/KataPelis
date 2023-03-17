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
    <div class="set-buttons">
      <ButtonPeli :peli="peli" />
    </div>
    <!--REPARTO-->
    <PeliculaCast :actors="actors" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import PeliculaCast from '@/components/BasePeliculaCast.vue'
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
  color: white;
  background-color: transparent;
  background: rgba(0, 0, 0, 0.243);
  border-radius: 8px;
  padding-left: 10px;
  width: 90%;
  margin-bottom: 20px;

  /* texto transparente para poder mostrar el degradado*/
}

.movie-detail .set {
  display: inline-block;
  /* para que se muestren en linea */
  margin-right: 64px;
  color: white;
  background-color: transparent;
  background: rgba(0, 0, 0, 0.243);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
}

.movie-detail .set-buttons {
  display: inline-block;
  /* para que se muestren en linea */
  margin-right: 64px;
  background: transparent;
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
  color: white;
  background-color: transparent;
  background: rgba(0, 0, 0, 0.243);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  width: 90%;
}
</style>
