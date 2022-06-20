<template>
  <div class="post" v-if="post">
    <p class="post-title">
      {{ post.title }}
    </p>
    <p class="post-body">{{ post.body }}</p>
    <div class="post-tags">
      <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
    </div>
  </div>
  <div v-else-if="error" class="post-error">
    {{ error }}
  </div>
  <SpinnerIem v-else />
</template>

<script setup lang="ts">
import getPost from "@/composables/getPost";
import { useRoute } from "vue-router";
import SpinnerIem from "@/components/SpinnerIem.vue";

const route = useRoute();
const id = route.params.id as string;

const { post, error } = getPost("posts", id);
</script>

<style scoped lang="scss">
.post {
  @apply flex flex-col items-start text-left max-w-[800px] mb-10;

  &-title {
    @apply text-2xl font-bold bg-teal-600 px-3 py-1 text-white cursor-default;
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

  &-error {
    @apply text-red-500 text-center;
  }
}
</style>
