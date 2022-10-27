<script>
export default {
    data() {
        return {
            name: "",
            content: "",
            author: "",
        }
    },

    methods: {
        submit() {
            let post = {
                name: this.name,
                content: this.content,
                author: this.author,
                replies: [],
                posted: new Date()
            }
            if (localStorage.getItem("forumPosts")) {
                let forumPosts = JSON.parse(localStorage.getItem("forumPosts"));
                forumPosts.unshift(post);
                localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
            } else {
                let forumPosts = [post];
                localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
            }
        }
    }
}

</script>

<template>
    <div class="root">
        <router-link to="/forum">
            &lt; Back</router-link>
        <h1>New forum post</h1>
        <hr>
        <form>
            <label>Title: </label>
            <input name="name" type="text" v-model="name" />

            <label>Author: </label>
            <input name="author" type="text" v-model="author" />

            <label>Content: </label>
            <textarea name="postContent" v-model="content"></textarea>

            <input type="submit" value="Submit" @click="submit" />
        </form>
    </div>
</template>

<style scoped>

</style>