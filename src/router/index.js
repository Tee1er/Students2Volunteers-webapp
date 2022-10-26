import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ForumView from "../views/ForumView.vue";
import PostView from "../views/PostView.vue";

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
    }

  ],
});

export default router;
