<!-- src/views/Detail.vue -->
<template>
  <div class="ma-6" v-if="detailStore.videoDetail">
    <Video class="video-wrapper" :video="detailStore.videoDetail" />

    <h2>{{ detailStore.videoDetail.snippet.title }}</h2>
    <pre>{{ detailStore.videoDetail.snippet.description }}</pre>
  </div>
</template>

<script setup>
import { useDetailStore } from "@/stores/detail";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const detailStore = useDetailStore();
const route = useRoute();

onMounted(() => {
  const videoId = route.params.video;
  detailStore.getVideoDetail(videoId);
});

</script>

<style scoped>
iframe {
  margin-bottom: 20px;
}
</style>
