<template>
  <div class="post">
    <p class="post-title">
      <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
    </p>
    <div class="post-delete" @click="handleDelete(post.id)">Delete post</div>
    <p class="post-body">{{ props.post.body.slice(0, 160) + "..." }}</p>
    <div class="post-tags">
      <span v-for="tag in props.post.tags" :key="tag">
        <router-link :to="`/tag/${tag}`">#{{ tag }}</router-link>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PostType } from "../types/index";
import deletePost from "@/composables/deletePost";

const props = defineProps({
  post: { type: Object as () => PostType, required: true },
});

const handleDelete = async (id: string) => {
  await deletePost("posts", id);
};
</script>

<style scoped lang="scss">
.post {
  @apply flex flex-col items-start text-left max-w-[800px] mb-10 relative w-full;

  &-delete {
    @apply text-gray-300 hover:text-red-500 hover:underline cursor-pointer text-right absolute right-0;
  }

  &-title {
    @apply text-2xl font-bold bg-teal-600 px-3 py-1 text-white;
  }

  &-body {
    @apply my-4;
  }

  &-tags {
    @apply flex flex-row flex-wrap justify-center items-center;

    span {
      @apply mx-2 first:ml-0 cursor-pointer text-gray-400 hover:text-gray-500 font-bold;
    }
  }
}
</style>
