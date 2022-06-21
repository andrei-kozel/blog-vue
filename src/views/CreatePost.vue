<template>
  <form @submit.prevent="handleFormSubmit" class="form">
    <!-- TITLE -->
    <div class="form-field mb-8">
      <label class="form-label">Post title:</label>
      <input
        class="form-input focus:outline-none focus:shadow-outline"
        type="text"
        placeholder=""
        v-model="title"
      />
    </div>

    <!-- TAGS -->
    <div class="form-field mb-3">
      <label class="form-label">Tags:</label>
      <input
        class="form-input focus:outline-none focus:shadow-outline"
        type="text"
        placeholder=""
        v-model="tag"
        @keydown.space.prevent="handleKeydown"
        @keydown.enter.prevent="handleKeydown"
      />
    </div>
    <div class="form-tags mb-8">
      <p
        v-for="tag in tags"
        :key="tag"
        class="form-tag"
        @click="handleRemoveTag(tag)"
      >
        {{ tag }}
      </p>
    </div>

    <!-- TEXTAREA -->
    <div class="form-field">
      <label class="form-label">Post text:</label>
      <textarea
        class="form-input h-32 focus:outline-none focus:shadow-outline"
        placeholder=""
        v-model="body"
      ></textarea>
    </div>
    <button class="form-button">Create post</button>
  </form>
  <button></button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PostCreationType } from "@/types";
import { useRouter } from "vue-router";
import addPost from "@/composables/addPost";

const router = useRouter();

const title = ref<string>("");
const tags = ref<string[]>([]);
const tag = ref<string>("");
const body = ref<string>("");

const handleFormSubmit = async () => {
  const post: PostCreationType = {
    title: title.value,
    tags: tags.value,
    body: body.value,
  };

  const { error, success } = await addPost("posts", post);

  if (success) {
    router.push("/");
  } else {
    console.log(error);
  }
};

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    const value = tag.value.replace(/[^\w ]/g, "");
    if (value.length > 0) {
      tags.value.push(tag.value);
      tag.value = "";
    }
  } else {
    tag.value = "";
  }
};

const handleRemoveTag = (tag: string) => {
  tags.value = tags.value.filter((t) => t !== tag);
};
</script>

<style scoped lang="scss">
.form {
  @apply max-w-[600px] m-auto w-full text-center;

  .form-field {
    @apply w-full text-left;
  }

  &-tags {
    @apply flex flex-row justify-start;
  }

  &-tag {
    @apply mr-2 bg-teal-100 px-3 py-1 rounded-full text-teal-700 hover:bg-red-200 hover:text-red-700 cursor-pointer;
  }

  &-label {
    @apply uppercase text-sm text-gray-500 font-bold;
  }

  &-input {
    @apply w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg;
  }

  &-button {
    @apply bg-teal-500 text-white p-3 rounded-lg uppercase text-lg font-bold hover:bg-teal-600;
  }
}
</style>
