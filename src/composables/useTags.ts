import { PostType } from "@/types";
import { ref } from "vue";

const useTags = (posts: Array<PostType>) => {
  const tags = ref<string[]>([]);
  const tagSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet] as string[];

  return { tags };
};

export default useTags;
