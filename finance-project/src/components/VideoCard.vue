<!--VideoCard.vue-->
<template>
  <div class="video-card">
    <Video :video="video" />
    <v-btn :to="{ name: 'detail', params: { video: video.id.videoId } }">
      <VideoTitle :video="video" />
    </v-btn>
  </div>
</template>

<script setup>
import Video from "@/components/Video.vue";
import VideoTitle from "@/components/VideoTitle.vue";
defineProps({
  video: Object,
});
</script>

<style scoped></style>
