<template>
  <router-link
    :to="`/${peli.imdbID}`"
    v-for="peli in peliculas"
    :key="peli.imdbID"
    class="cardSearch"
  >
    <img class="film_img" :src="peli.Poster" :alt="peli.Title" />
    <div class="cont">
      <h3>{{ peli.Title }}</h3>
      <p>
        {{ peli.Year }}
      </p>
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
header nav .search_user .search .cardSearch {
  position: relative;
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px 0px;
  text-decoration: none;
  /* display: none; */
}

header nav .search_user .search .cardSearch::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  z-index: -1;
}

header nav .search_user .search .cardSearch .img {
  width: 28px;
  height: 90%;
  border-radius: 2px;
}

header nav .search_user .search .cardSearch .film_img {
  width: 50px;
  height: 90%;
  border-radius: 5px;
}

header nav .search_user .search .cardSearch .cont {
  margin-left: 10px;
  color: #fff;
}

header nav .search_user .search .cardSearch .cont h3 {
  font-size: 15px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 250px;
}

header nav .search_user .search .cardSearch .cont p {
  font-size: 10px;
  color: rgb(255, 255, 255, 0.8);
}

header nav .search_user .search .cardSearch .cont span {
  background-color: yellow;
  color: #000;
  padding: 0px 3px;
  margin: opx 5px 0px;
}
</style>
