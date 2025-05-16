<template>
    <div>
        <h3>{{ channel.title }}</h3>
        <button
            v-if="channel.isSubscribed === false"
            @click="addChannel(channel)"
        >구독</button>
        <button
            v-else
            @click="deleteChannel(channel.id)"        
        >구독 취소</button>
    </div>
</template>

<script setup>
    import { useAppStore } from "@/stores/app.js";
    const store = useAppStore()
    
    const props = defineProps({
        channel: Object
    })

    // 채널 추가
    const addChannel = function (channel) {
        console.log(channel)
        channel.isSubscribed = true
        store.addChannel(channel)
    }

    // 채널 삭제
    const deleteChannel = function (selectedId) {
        store.deleteChannel(selectedId)
    }
</script>

<style scoped>

</style>