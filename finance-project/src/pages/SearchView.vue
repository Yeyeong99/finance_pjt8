<!--SearchView.vue-->
<template>
  <div>
    <SearchBar @search="handleSearch" />
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
