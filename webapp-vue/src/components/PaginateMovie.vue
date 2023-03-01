<template>
  <div id="btn-group" role="group">
    <button
      id="trailer"
      @click="emit('prev')"
      type="button"
      class="btn btn-outline-primary"
      :disabled="inicio === 0"
    >
      Previous
    </button>
    <button
      id="trailer"
      @click="emit('next')"
      type="button"
      class="btn btn-outline-primary"
      :disabled="fin >= maxLength"
    >
      Next
    </button>
  </div>
</template>
<script setup>
const emit = defineEmits(['next', 'prev'])
defineProps(['inicio', 'fin', 'maxLength'])
</script>
<style scoped>
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
