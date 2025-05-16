<!--SearchView.vue-->
<template>
  <div class="ma-5">
    <SearchBar class="mt-5 mb-5" @search="handleSearch" />
    <div class="d-flex flex-wrap justify-space-between mb-6">
      <VideoCard
        v-for="video in appStore.videos"
        v-if="appStore.videos.length > 0"
        :key="video.id.videoId"
        class="video-wrapper"
        :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import Video from "@/components/Video.vue";
import SearchBar from "@/components/SearchBar.vue";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const appStore = useAppStore();
const route = useRoute();

function handleSearch(keyword) {
  appStore.searchKeyword(keyword); // Pinia 스토어의 메서드 실행
}

console.log(appStore.videos);
</script>
<style scoped></style>
