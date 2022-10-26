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
