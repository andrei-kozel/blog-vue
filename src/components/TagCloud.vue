<template>
  <div class="tags">
    <p class="tags-title">Tags:</p>
    <div class="tags-container">
      <span>#coding</span>
      <span>#web</span>
      <span>#vue</span>
      <span>#news</span>
      <span>#dota</span>
      <span>#create</span>
      <span>#react</span>
      <span>#webdev</span>
      <span>#mobile</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
