import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { PostType } from "../types/index";

const getPosts = (collectionName: string) => {
  const posts = ref<PostType[]>([]);
  const collectionRef = collection(db, collectionName);

  const unsub = onSnapshot(collectionRef, (snapshot) => {
    const result: Array<PostType> = [];

    snapshot.docs.forEach((doc) => {
      const { title, tags, body } = doc.data();
      const id = doc.id;
      result.push({ id, title, tags, body });
    });

    posts.value = result;
  });

  watchEffect((onValidate) => {
    onValidate(() => unsub());
  });

  return { posts };
};

export default getPosts;
