<template>
  <section>
    <h4>Popular</h4>
    <i class="bi bi-chevron-left"></i>
    <i class="bi bi-chevron-right"></i>
    <!-- Cards Películas-->
    <div class="cards">
      <BaseCardPelicula :peliculas="peliculas" />
    </div>
  </section>
</template>
<script setup>
import BaseCardPelicula from '@/components/BaseCardPelicula.vue'

defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})
</script>
<style scoped>
header section {
  position: absolute;
  width: 100%;
  height: auto;
  padding: 0px 50px;
  bottom: 20px;
  color: #fff;
}

header section .cards {
  position: relative;
  width: 100%;
  height: 200px;
  /* border: 1px solid #fff; */
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
}

header section .cards --webkit-scrollbar {
  display: none;
}
header section .bi-chevron-left,
.bi-chevron-right {
  position: absolute;
  top: 50%;
  left: 3%;
  width: 25px;
  height: 25px;
  background: rgb(255, 255, 255, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s linear;
  z-index: 99999999999;
  opacity: 0;
}

header section .bi-chevron-right {
  left: unset;
  right: 3%;
}

header section:hover .bi-chevron-right {
  opacity: 1;
}

header section:hover .bi-chevron-left {
  opacity: 1;
}
</style>
