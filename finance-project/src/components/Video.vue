<template>
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${video.id.videoId}`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
defineProps({
    video: Object
})
</script>

<style scoped>
.video-wrapper {
  margin-bottom: 20px;
}
</style>
