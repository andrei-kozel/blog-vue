<template>
  <NavigationBar />

  <router-view />
</template>

<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style>
#app {
  @apply container m-auto text-gray-700 max-w-[1200px] px-5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
