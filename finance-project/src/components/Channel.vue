<template>
    <div>
        <h3>{{ channel.title }}</h3>
        <button @click="deleteChannel(channel.id)">구독 취소</button>
    </div>
</template>

<script setup>
    import { useAppStore } from "@/stores/app.js";
    const store = useAppStore()
    
    const props = defineProps({
        channel: Object
    })

    // 채널 삭제
    const deleteChannel = function (selectedId) {
        store.deleteChannel(selectedId)
    }
</script>

<style scoped>

</style>