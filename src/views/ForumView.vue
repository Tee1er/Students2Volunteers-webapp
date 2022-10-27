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
    <div class="root">
        <h1>Forum </h1>
        <hr>
        <div>
            <div>
                <router-link to="/forum/new">New post</router-link>
            </div>
            <div v-for="n of posts.length">
                <ForumPostListing :index="n - 1" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>