<template>
    <button
        v-if="video.isSaved === false"
        @click="saveVideo(video)"
    >저장</button>
    <button
        v-else
        @click="deleteVideo(video.id.videoId)"
    >저장 취소</button>
    <span> | </span>
    <button
        v-if="video.isLiked === false"
        @click="likeVideo(video.id.videoId)"
    >좋아요</button>
    <button
        v-else
        @click="unlikeVideo(video.id.videoId)"
    >좋아요 취소</button>
</template>

<script setup>
    import { useAppStore } from "@/stores/app.js";

    const store = useAppStore()

    defineProps({
        video: Object,
    });

    // 나중에 볼 동영상 저장하기
    const saveVideo = function (selectedId) {
        store.saveVideo(selectedId)
    }

    // 저장된 동영상 저장 취소하기
    const deleteVideo = function (selectedId) {
        // isSaved 처리하기
        const video = store.videos.find((video) => video.id.videoId === selectedId)
        video.isSaved = false
        store.deleteVideo(selectedId)
    }

    // 동영상 좋아요
    const likeVideo = function (selectedId) {
        store.likeVideo(selectedId)
    }

    // 동영상 좋아요 취소하기
    const unlikeVideo = function (selectedId) {
        // isLiked 처리하기
        const video = store.videos.find((video) => video.id.videoId === selectedId)
        video.isLiked = false
    }
</script>

<style scoped>

</style>