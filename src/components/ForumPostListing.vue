<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
            post: JSON.parse(localStorage.getItem("forumPosts"))[this.index]
        }
    },
}
</script>

<template>
    <div class="root">
        <router-link :to="`forum/${index}`">
            <h2>{{ post.name }}</h2>
            <div>
                <p><b>Replies:</b> {{ post.replies.length }}</p>
                <p><b>Last reply:</b> {{ post.replies[0] ? post.replies[0].date : "--" }}</p>
                <p><b>Date posted:</b> {{ post.posted }}</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.root {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 2rem;
    max-height: 20rem;
}
</style>