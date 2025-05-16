<!--HomeView.vue-->
<template>
  <div>
    <Video
      v-for="video in appStore.videos"
      v-if="appStore.videos.length > 0"
      :key="video.id.videoId"
      class="video-wrapper"
      :video="video"
    />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

onMounted(() => {
  appStore.searchKeyword("금융");
});
</script>

<style scoped>
.video-wrapper {
  margin-bottom: 20px;
}
</style>
