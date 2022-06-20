<template>
  <div>
    <div v-if="posts.length" class="home">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <SpinnerIem v-else />
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
