<!--SearchView.vue-->
<template>
  <div>
    <SearchBar @search="handleSearch" />
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
import Video from "@/components/Video.vue";
import SearchBar from "@/components/SearchBar.vue";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const appStore = useAppStore();
const route = useRoute();

onMounted(() => {
  appStore.videos = [];
});

// 만약 사용자가 같은 SearchView에서 검색 후 다시 검색 페이지로 오면
watch(
  () => route.fullPath,
  () => {
    appStore.videos = [];
  }
);
function handleSearch(keyword) {
  appStore.searchKeyword(keyword); // Pinia 스토어의 메서드 실행
}
</script>
