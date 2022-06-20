import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateBlog from "../views/CreateBlog.vue";
import PostView from "../views/PostView.vue";
import TagView from "@/views/TagView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/create-blog",
    name: "Create",
    component: CreateBlog,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostView,
    props: true,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: TagView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
