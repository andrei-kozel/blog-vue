<template>
  <div class="home">
    <PostList v-if="posts.length > 0" :posts="posts" />
    <SpinnerIem v-else />
    <TagCloud />
  </div>
</template>

<script setup lang="ts">
import TagCloud from "@/components/TagCloud.vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { PostType } from "../types/index";
import PostList from "@/components/PostList.vue";
import SpinnerIem from "@/components/SpinnerIem.vue";

const collectionRef = collection(db, "posts");
const posts = ref<PostType[]>([]);

getDocs(collectionRef).then((snapshot) => {
  let docs: Array<PostType> = [];

  snapshot.docs.forEach((doc) => {
    const { title, tags, body } = doc.data();
    const id = doc.id;
    docs.push({ id, title, tags, body });
  });

  posts.value = docs;
});
</script>

<style scoped lang="scss">
.home {
  @apply flex flex-row items-start place-content-between w-full;
}
</style>
