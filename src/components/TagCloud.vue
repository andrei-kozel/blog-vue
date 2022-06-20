<template>
  <div class="tags">
    <p class="tags-title">
      Tags: <router-link to="/" class="tags-title__link">all posts</router-link>
    </p>
    <div class="tags-container">
      <span v-for="tag in tags" :key="tag">
        <router-link :to="`/tag/${tag}`">#{{ tag }}</router-link>
      </span>
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

    &__link {
      @apply text-gray-500 hover:text-gray-600 cursor-pointer text-base font-normal underline;
    }

    a.router-link-active {
      @apply text-teal-600 text-base;
    }
  }

  &-container {
    @apply flex flex-row flex-wrap;

    span {
      @apply mr-2 cursor-pointer text-gray-400 hover:text-gray-500;
    }
  }
}

.tags a.router-link-active {
  @apply text-teal-600 font-bold;
}
</style>
