<template>
    <div>
        <h1>나중에 볼 동영상</h1>
    </div>

    <!-- 여기에 동영상 쭉 나열 -->
    <div v-if="SavedVideo.length > 0">
        <!-- 저장된 비디오만 출력할 수 있도록 -->
        <VideoDetail
            v-for="video in store.savedVideo"
            :key="video.id"
            :video="video"
        />
    </div>
    <div v-else>
        <p>등록된 비디오 없음</p>
    </div>
</template>

<script setup>
    // 로컬 스토리지 사용
    // import { useVideoStore } from "@/stores/video.js";
    // const store = useVideoStore()

    // 저장된 비디오 찾기 >> store로 들어갈 예정
    // const savedVideo = store.videos.filter((video) => video.isSaved === true)
    
    // 삭제하기 >> 나중에 VideoDetail로 넘어가야 함.
    // const deleteVideo = function (selectedId) {
    //     store.deleteVideo(selectedId)
    // }
</script>

<style scoped>

</style>