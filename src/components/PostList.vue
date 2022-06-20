<template>
  <div class="posts">
    <PostItem v-for="post in props.posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { PostType } from "@/types";
import { defineProps } from "vue";
import PostItem from "./PostItem.vue";

const props = defineProps({
  posts: { type: Object as () => Array<PostType>, required: true },
});
</script>

<style scoped>
.posts {
  @apply flex flex-col items-start text-left max-w-[800px];
}
</style>
