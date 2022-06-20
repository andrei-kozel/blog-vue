<template>
  <div>
    <div v-if="posts.length" class="home">
      <PostList :posts="postsWithTag" />
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
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const { posts } = getPosts("posts");

const route = useRoute();

const postsWithTag = computed(() => {
  return posts.value.filter((post) =>
    post.tags.includes(route.params.tag as string)
  );
});
</script>

<style scoped lang="scss">
.home {
  @apply flex flex-row items-start place-content-between w-full;
}
</style>
