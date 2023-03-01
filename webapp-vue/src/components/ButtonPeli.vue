<template>
  <div class="set">
    <a id="trailer" href="#" target="_blank">
      Trailer
      <i class="bi bi-play-fill"></i>
    </a>
    <a id="imdb" :href="`https://www.imdb.com/title/${peliId}`" target="_blank">
      IMDB
    </a>
  </div>
</template>

<script setup>
defineProps({
  peliId: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
#trailer {
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #00bfdd, #0079ff);
  border-radius: 5px;
  color: #fff;
  margin: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: none 0s ease 0s;
  position: relative;
  top: 18px;
}

#imdb {
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #f8ed18, #f5d502);
  border-radius: 5px;
  color: #000;
  margin: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: none 0s ease 0s;
  position: relative;
  top: 18px;
}
</style>
