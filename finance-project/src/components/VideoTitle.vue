<template>
  <p>{{ video.snippet.title }}</p>
</template>

<script setup>
defineProps({
  video: Object,
});
</script>

<style scoped></style>
