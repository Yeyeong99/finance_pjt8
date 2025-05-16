<template>
    <div>
        <h1>저장된 채널 목록</h1>
    </div>

    <Channel
        v-for="channel in store.channels"
        :key="channel.id"
        :channel="channel"
    />
</template>

<script setup>
    import Channel from "@/components/Channel.vue";
    import { useAppStore } from "@/stores/app.js";
    const store = useAppStore()

</script>

<style scoped>

</style>