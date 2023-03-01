<template>
  <router-link
    :to="`/${peli.imdbID}`"
    v-for="peli in peliculas"
    :key="peli.imdbID"
    class="card"
  >
    <img :src="peli.Poster" :alt="peli.Title" />
    <div class="rest_card">
      <img :src="peli.Poster" alt="" />
      <div class="cont">
        <h4>{{ peli.Title }}</h4>
        <div class="sub">
          <p>{{ peli.Year }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})
</script>
<style scoped>
header section .cards .card {
  position: relative;
  min-width: 130px;
  height: 180px;
  /* border: 1px solid #fff; */
  border-radius: 8px;
  margin-right: 10px;
  background: #000;
  transition: 0.3s;
}

header section .cards .card .poster {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
}

header section .cards .card:hover {
  width: 300px;
  overflow: hidden;
}

header section .cards .card .rest_card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  left: 0;
  top: 0;
  z-index: 999999;
  opacity: 0;
  transition: 0.4s linear;
}

header section .cards .card .rest_card img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: -1;
}

header section .cards .card .rest_card::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000);
  left: 0;
  bottom: 0;
  z-index: -1;
}

header section .cards .card .rest_card .cont {
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 0;
  color: #fff;
  padding: 0px 20px;
}

header section .cards .card .rest_card .cont h4 {
  font-size: 15px;
}

header section .cards .card .rest_card .cont .sub {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header section .cards .card .rest_card .cont .sub p {
  font-size: 12px;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.7);
}

header section .cards .card .rest_card .cont .sub h3 {
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
}

header section .cards .card .rest_card .cont .sub h3 span {
  background: yellow;
  color: #000;
  padding: 0px 3px;
  margin: 0px 5px 0px 10px;
  font-weight: 500;
  border-radius: 2px;
}

header section .cards .card .rest_card .cont .sub h3 i {
  margin-right: 3px;
}

header section .cards .card:hover .rest_card {
  opacity: 1;
}
</style>
