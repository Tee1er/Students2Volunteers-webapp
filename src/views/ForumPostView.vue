<script>
import ForumPostReplyForm from "../components/ForumPostReplyForm.vue";

export default {

    components: {
        ForumPostReplyForm
    },

    data() {
        return {
            post: JSON.parse(localStorage.getItem("forumPosts"))[this.$route.params.index],
        }
    },

    created() {
        this.$watch(() => this.$route.params, (newParams, oldParams) => {
            // Change post details
            this.post = JSON.parse(localStorage.getItem("forumPosts"))[this.$route.params.index]
        })
    }
}
</script>

<template>
    <div class="root view">
        <router-link to="/forum" class="back">
            ◁ Back</router-link>
        <h1>{{ post.name }}</h1>
        <p>{{ post.author }}</p>
        <hr>
        <p>
            {{ post.content }}
        </p>

        <h2>Replies</h2>
        <hr>
        <ForumPostReplyForm :index="this.$route.params.index" />

        <div v-for="reply in post.replies">
            <p class="author">{{ reply.author }}</p>
            <p class="content">{{ reply.content }}</p>
            <hr>
        </div>

    </div>
</template>

<style scoped>
.back {
    color: var(--dark);
    display: inline-block;
    text-decoration: none;
    border-radius: 0.25rem;
}

.view .author {
    font-weight: bold;
}

.back:hover {
    text-decoration: underline;
    transition: 0.5s;
}
</style>