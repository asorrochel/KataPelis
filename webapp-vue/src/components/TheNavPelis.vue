<template>
  <div class="logo_ul">
    <img src="/logo.png" alt="logo" />
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="#movies">Películas</a>
      </li>
    </ul>
  </div>
  <!-- Search -->
  <SearchPeliculas />
</template>
<script setup>
import SearchPeliculas from '@/components/SearchPeliculas.vue'
</script>
<style scoped>
header nav .logo_ul img {
  width: 50px;
  height: 50px;
  margin-left: 150px;
  margin-bottom: 10px;
}

header nav .logo_ul {
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

header nav .logo_ul img {
  width: 90px;
}

header nav .logo_ul ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

header nav .logo_ul ul li {
  padding: 3px 15px;
}

header nav .logo_ul ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  transition: 0.3s linear;
}

header nav .logo_ul ul li a:hover {
  color: rgb(255, 255, 255, 0.7);
}
</style>
