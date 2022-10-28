<script>

import ForumPostListing from "../components/ForumPostListing.vue"

export default {
    data() {
        return {
            posts: localStorage.getItem("forumPosts") ? JSON.parse(localStorage.getItem("forumPosts")) : []
        }
    },
    components: {
        ForumPostListing
    }
}

</script>

<template>
    <div class="root view">
        <h1>Forum </h1>
        <hr>
        <div>
            <div>
                <router-link to="/forum/new" class="new-post">New post</router-link>
            </div>
            <div class="posts-container">
                <ForumPostListing :index="n - 1" v-for="n of posts.length" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.new-post {
    background-color: var(--light-blue);
    color: var(--dark-blue);
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    display: inline-block;
    text-decoration: none;
}

.new-post:hover {
    background-color: var(--dark-blue);
    color: var(--light);
    transition: 0.5s;
}

.posts-container {
    margin-top: 1rem;
}
</style>