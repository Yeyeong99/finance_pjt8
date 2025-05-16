<template>
  <form @submit.prevent="handleSubmit">
    <input type="input" v-model="keyWord" />
    <input type="submit" value="검색" />
  </form>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["search"]);

const keyWord = ref("");

function handleSubmit() {
  emit("search", keyWord.value); // 부모에게 keyword 전달
}
</script>

<style scoped></style>
