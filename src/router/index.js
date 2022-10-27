import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ForumView from "../views/ForumView.vue";
import PostView from "../views/PostView.vue";
import NewForumPostView from "../views/NewForumPostView.vue";
import ForumPostView from "../views/ForumPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainView,
    },
    {
      path: "/forum",
      component: ForumView,
    },
    {
      path: "/post",
      component: PostView,
    },
    {
      path: "/forum/new",
      component: NewForumPostView,
    },
    {
      path: "/forum/:index",
      component: ForumPostView,
    }

  ],
});

export default router;
