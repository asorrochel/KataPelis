<template>
  <section class="movies">
    <h2 class="heading">Películas</h2>
    <PaginatePelicula
      class="mb-2"
      @next="nextPeliPag"
      @prev="prevPeliPag"
      :inicio="peliInicio"
      :fin="peliFin"
      :maxLength="maxLength"
    />
    <!-- Contenedor Cards Películas-->
    <div class="movies-container">
      <div
        class="box"
        v-for="peli in peliculas.slice(peliInicio, peliFin)"
        :key="peli.imdbID"
      >
        <div class="box-img">
          <RouterLinkPelicula :peli="peli" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, defineProps, watchEffect } from 'vue'
import RouterLinkPelicula from '@/components/RouterLinkPelicula.vue'
import PaginatePelicula from '@/components/PaginatePelicula.vue'
import { usePaginationStore } from '@/store/PagAndSearch'
import { storeToRefs } from 'pinia'

const usePagination = usePaginationStore()
const { pageV } = storeToRefs(usePagination)
const { setRoutePage } = usePagination

const pelisPerPage = 3
const peliInicio = ref(0)
const peliFin = computed(() => peliInicio.value + pelisPerPage)

const props = defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})

const nextPeliPag = () => {
  peliInicio.value += pelisPerPage
  setRoutePage(peliInicio.value / pelisPerPage)
}

const prevPeliPag = () => {
  peliInicio.value -= pelisPerPage
  setRoutePage(peliInicio.value / pelisPerPage)
}

const maxLength = computed(() => props.peliculas.length)

watchEffect(() => {
  peliInicio.value = pageV.value * pelisPerPage
})
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
  box-shadow: -4px 4px 16px #00ffff, 4px -4px 16px #00ff00;
  /* sombra */
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
