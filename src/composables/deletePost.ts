import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { ref } from "vue";

const deletePost = async (collectionName: string, postId: string) => {
  const success = ref<boolean>();
  const error = ref<string>();
  const docRef = doc(db, collectionName, postId);

  try {
    await deleteDoc(docRef);
    success.value = true;
  } catch (e: unknown) {
    error.value = "Something went wrong";
  }

  return { error, success };
};

export default deletePost;
