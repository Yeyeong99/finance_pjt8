<template>
  <v-app>
    <v-app-bar>
      <!-- 상단 네비게이션 바 -->
      <v-toolbar-title>MYTUBE </v-toolbar-title>
      <v-btn text :to="{name: 'home'}">Home</v-btn>
      <span> | </span>
      <v-btn text :to="{name: 'search'}">Search</v-btn>
      <span> | </span>
      <v-btn text :to="{name: 'later'}">Later</v-btn>
    </v-app-bar>
    
    <!-- 메인 콘텐츠 영역 -->
    <v-main>
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script setup>

</script>

<style scoped>

</style>
