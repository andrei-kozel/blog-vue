<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <PostItem :post="post" />
    </div>
    <TagCloud />
  </div>
</template>

<script setup lang="ts">
import PostItem from "../components/PostItem.vue";
import TagCloud from "@/components/TagCloud.vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { PostType } from "../types/index";

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
