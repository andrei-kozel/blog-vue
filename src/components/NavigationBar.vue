<template>
  <div class="navbar">
    <p class="navbar-title" @click="handleLogoClick">The Vue Blog</p>
    <div class="navbar-links">
      <router-link class="navbar-link" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="navbar-link" :to="{ name: 'Create' }"
        >Create blog</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogoClick = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
.navbar {
  @apply flex flex-row place-content-between items-end w-full py-16 text-gray-400;

  &-title {
    @apply text-4xl cursor-pointer hover:text-teal-700 transition-all ease-in-out duration-300;
  }

  &-link {
    @apply text-lg mx-2;
  }
}

.router-link-exact-active {
  @apply text-teal-600;
}
</style>
