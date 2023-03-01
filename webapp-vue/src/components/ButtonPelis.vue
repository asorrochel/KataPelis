<template>
  <div class="btns">
    <a
      href="https://www.imdb.com/video/vi1176612889/?playlistId=tt0369610&ref_=tt_ov_vi"
      id="trailer"
      target="_blank"
      >Trailer <i class="bi bi-play-fill"></i
    ></a>
    <a
      href="https://www.imdb.com/title/tt0369610/?ref_=vp_close"
      id="imdb"
      target="_blank"
      >IMDB</a
    >
  </div>
</template>
<script setup></script>
<style scoped>
header .content .btns {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

#trailer {
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #00bfdd, #0079ff);
  border-radius: 5px;
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
}

#imdb {
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #f8ed18, #f5d502);
  border-radius: 5px;
  color: #000;
  margin-left: 10px;
  text-decoration: none;
}
</style>
