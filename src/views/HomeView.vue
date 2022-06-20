<template>
  <div class="home">
    <PostList v-if="posts.length > 0" :posts="posts" />
    <SpinnerIem v-else />
    <TagCloud />
  </div>
</template>

<script setup lang="ts">
import TagCloud from "@/components/TagCloud.vue";
import PostList from "@/components/PostList.vue";
import SpinnerIem from "@/components/SpinnerIem.vue";
import getPosts from "../composables/getPosts";

const { posts } = getPosts("posts");
</script>

<style scoped lang="scss">
.home {
  @apply flex flex-row items-start place-content-between w-full;
}
</style>
