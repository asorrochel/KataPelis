<template>
  <router-link :to="`/${peli.imdbID}`">
    <img :src="peli.Poster" alt="" />
    <h3>{{ peli.Title }}</h3>
    <span>{{ peli.Year }}</span>
  </router-link>
</template>
<script setup>
defineProps({
  peli: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.box .box-img:hover h3 {
  margin-top: 24px;
  font-weight: medium;
}

.box .box-img:hover span:hover {
  margin-top: 24px;
  font-weight: medium;
}
.box h3 {
  margin-top: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.box a {
  color: #fff;
  text-decoration: none;
}

.box span {
  font-size: 13px;
  color: #fff;
}
</style>
