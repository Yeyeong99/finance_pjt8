<template>
  <v-app>
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <span> | </span>
      <RouterLink :to="{name: 'search'}">Search</RouterLink>
      <span> | </span>
      <RouterLink :to="{name: 'later'}">Later</RouterLink>
    </nav>
    
    <router-view />
  </v-app>
</template>

<script setup>
  import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped>

</style>
