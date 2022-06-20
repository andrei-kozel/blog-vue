import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { PostType } from "../types/index";

const getPost = (collectionName: string, postId: string) => {
  const post = ref<PostType>();
  const error = ref<string>();
  const collectionRef = doc(db, collectionName, postId);

  const unsub = onSnapshot(collectionRef, (doc) => {
    if (doc.exists()) {
      const { title, tags, body } = doc.data() as PostType;
      const id = doc.id;
      post.value = { id, title, tags, body };
    } else {
      error.value = "Post not found";
    }
  });

  watchEffect((onValidate) => {
    onValidate(() => unsub());
  });

  return { post, error };
};

export default getPost;
