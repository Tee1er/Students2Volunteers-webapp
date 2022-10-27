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
    <div class="root">
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
            <p>{{ reply.author }}</p>
            <p>{{ reply.content }}</p>
            <hr>
        </div>

    </div>
</template>

<style scoped>

</style>