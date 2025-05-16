<!--VideoCard.vue-->
<template>
  <div class="mb-5">
    <v-card max-width="600px">
      <v-card-item>
        <Video :video="video" />
        <v-card-actions>
          <v-btn :to="{ name: 'detail', params: { video: video.id.videoId } }" width="100%">
            <VideoTitle :video="video" />
          </v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
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
