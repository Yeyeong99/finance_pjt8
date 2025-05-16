<!-- src/views/Detail.vue -->
<template>
  <div v-if="detailStore.videoDetail">
    <Video class="video-wrapper" :video="detailStore.videoDetail" />

    <h2>{{ detailStore.videoDetail.snippet.title }}</h2>
    <Channel
      :channel="{
        id: detailStore.videoDetail.snippet.channelId,
        title: detailStore.videoDetail.snippet.channelTitle,
        isSubscribed: false
      }"
    />
    <pre>{{ detailStore.videoDetail.snippet.description }}</pre>
  </div>
</template>

<script setup>
import Channel from "@/components/Channel.vue";
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
