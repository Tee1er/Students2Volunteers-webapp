import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

if (!localStorage.getItem("allInterests")) {
    // Basic list of interests
    let interests = [
        "seniors",
        "animals",
        "tutoring",
        "environment",
        "mentorship",
        "foodpantry",
        "sports",
        "foodprep",
        "crafts",
        "music",
        "art",
        "mentalhealth",
        "health",
        "education",
        "government",
        "virtual",
        "inperson",
        "outdoors",
        "indoors",
        "creative",
        "technical",
        "writing",
        "science"
    ]
    localStorage.setItem("allInterests", JSON.stringify(interests));
}

if (!localStorage.getItem("forumPosts")) {
    // List of posts
    localStorage.setItem("forumPosts", JSON.stringify([]))
}
if (!localStorage.getItem("userInterests")) {
    // List of user selected interests
    localStorage.setItem("userInterests", JSON.stringify([]))
}

if (!localStorage.getItem("opportunities")) {
    // List of posts
    localStorage.setItem("opportunities", JSON.stringify([]))
}