<template>
  <form @submit.prevent="handleSubmit">
    <v-row class="flex-nowrap">
      <v-col cols="11" class="pa-0 me-2">
        <v-text-field
          v-model="keyWord"
          hide-details
          clearable
          dense
          variant="outlined"
          class="pa-0"
      /></v-col>
      <v-col cols="1" class="pa-0"
        ><v-btn type="submit" block class="pa-7">검색</v-btn></v-col
      >
    </v-row>
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
