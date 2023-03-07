<template>
  <router-link
    :to="{
      name: 'actor',
      params: { name: actor.name },
    }"
  >
    <img
      :src="`https://image.tmdb.org/t/p/original${actor.image}`"
      :alt="actor.name"
    />
    <label>{{ actor.name }}</label>
  </router-link>
</template>
<script setup>
defineProps({
  actor: {
    type: Object,
    required: true,
  },
})
</script>
<style scoped>
.movie-cast .cast:hover img {
  border-width: 0px;
  transform: scale(1.1) rotateZ(-2deg);
  box-shadow: -4px 4px 16px #00ffff, 4px -4px 16px #00ff00; /* sombra */
}

.movie-cast label {
  margin-top: 8px;
  display: block;
}

.movie-cast .cast:hover label {
  margin-top: 24px;
  color: #00ff00;
  font-weight: medium;
}

.movie-cast img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid #cccccc;
}

.movie-cast a {
  text-decoration: none;
  color: white;
}
</style>
