<template>
  <div class="post">
    <p class="post-title">{{ props.post.title }}</p>
    <p class="post-body">{{ props.post.body.slice(0, 160) + "..." }}</p>
    <div class="post-tags">
      <span v-for="tag in props.post.tags" :key="tag">#{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PostType } from "../types/index";

const props = defineProps({
  post: { type: Object as () => PostType, required: true },
});
</script>

<style scoped lang="scss">
.post {
  @apply flex flex-col items-start text-left max-w-[800px] mb-10;

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
