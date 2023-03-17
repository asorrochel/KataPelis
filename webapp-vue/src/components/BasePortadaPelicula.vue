<template>
  <div class="content">
    <h1>Jurassic World</h1>
    <p>
      Un nuevo parque temático, construido en el emplazamiento original de
      Jurassic Park, crea un dinosaurio híbrido modificado genéticamente, el
      Indominus rex, que escapa a la contención y se lanza a la matanza.
    </p>
    <div class="details">
      <h6>Una película de Steven Spielberg</h6>
      <h5 id="gen">Acción</h5>
      <h4>2015</h4>
      <h3 id="rate"><span>IMDB</span><i class="bi bi-star-fill">6.9</i></h3>
    </div>
    <!-- Botones-->
    <ButtonPelis />
  </div>
</template>
<script setup>
import ButtonPelis from '@/components/ButtonPelis.vue'
</script>
<style scoped>
header .content {
  position: relative;
  color: #fff;
  margin-top: 50px;
  padding-left: 50px;
}

header .content h1 {
  font-size: 50px;
  margin-top: 85px;
}

header .content p {
  font-size: 11px;
  width: 350px;
  word-break: normal;
}

header .content .details {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

header .content .details h6 {
  color: rgb(255, 255, 255, 0.6);
  font-size: 10px;
  margin-right: 10px;
}

header .content .details h5 {
  color: rgb(142, 230, 48);
  font-size: 10px;
  margin-right: 10px;
}

header .content .details h4 {
  color: #fff;
  font-size: 10px;
  margin-right: 10px;
}

header .content .details h3 {
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 10px;
}

header .content .details h3 span {
  background: yellow;
  color: #000;
  padding: 0px 3px;
  margin: 0px 5px 0px 10px;
  font-weight: 500;
}

header .content .details h3 i {
  margin-right: 5px;
}
</style>
