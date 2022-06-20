<template>
  <div class="tags">
    <p class="tags-title">Tags:</p>
    <div class="tags-container">
      <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import useTags from "@/composables/useTags";
import { PostType } from "@/types";

const props = defineProps({
  posts: { type: Array as () => PostType[], required: true },
});

const { tags } = useTags(props.posts as unknown as PostType[]);
</script>

<style scoped lang="scss">
.tags {
  @apply text-gray-400 max-w-[300px] ml-10;

  &-title {
    @apply text-2xl font-bold mb-2;
  }

  &-container {
    @apply flex flex-row flex-wrap;

    span {
      @apply mr-2 cursor-pointer text-gray-400 hover:text-gray-500;
    }
  }
}
</style>
