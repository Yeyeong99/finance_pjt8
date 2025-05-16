<template>
    <div>
        <h1>나중에 볼 동영상</h1>
    </div>

    <!-- 여기에 동영상 쭉 나열 -->
    <div v-if="store.savedVideos.length > 0">
        <!-- 저장된 비디오만 출력할 수 있도록 -->
        <Video
            v-for="video in store.savedVideos"
            :key="video.id.videoId"
            :video="video"
        />
    </div>
    <div v-else>
        <p>등록된 비디오 없음</p>
    </div>
</template>

<script setup>
    // 로컬 스토리지 사용
    import { useAppStore } from "@/stores/app.js";
    import Video from "@/components/Video.vue";
    
    const store = useAppStore()
    
</script>

<style scoped>

</style>