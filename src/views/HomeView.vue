<template>
  <div class="home">
    <PostItem />
    <TagCloud />
  </div>
</template>

<script setup lang="ts">
import PostItem from "../components/PostItem.vue";
import TagCloud from "@/components/TagCloud.vue";
import { db } from "../firebase/config.js";
import { collection, getDocs } from "firebase/firestore";
import { Ref, ref } from "vue";

interface Post {
  id: string;
  title: string;
  tags: Array<string>;
  body: string;
}

const collectionRef = collection(db, "posts");
const posts = ref<Post[]>([]);

getDocs(collectionRef).then((snapshot) => {
  let docs: Array<Post> = [];
  snapshot.docs.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  console.log(docs);
});
</script>

<style scoped lang="scss">
.home {
  @apply flex flex-row items-start place-content-between w-full;
}
</style>
