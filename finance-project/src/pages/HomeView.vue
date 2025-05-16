<!--HomeView.vue-->
<template>
  <div class="text-center mt-6">
    <h2 c>금융 관련 동영상 보기</h2>
  </div>
  <div class="d-flex flex-wrap justify-space-between ma-6">
    <VideoCard
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
