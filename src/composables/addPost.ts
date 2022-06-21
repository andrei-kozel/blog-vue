import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";
import { PostCreationType } from "../types/index";

const addPost = async (collectionName: string, post: PostCreationType) => {
  const error = ref<string>();
  const success = ref<boolean>();
  const collectionRef = collection(db, collectionName);

  try {
    await addDoc(collectionRef, post);
    success.value = true;
  } catch (e: unknown) {
    error.value = "something went wrong";
  }

  return { error, success };
};

export default addPost;
