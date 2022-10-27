<script>
export default {

    props: {
        index: Number,
    },

    data() {
        return {
            author: "",
            content: "",
            error: ""
        }
    },
    methods: {
        submit() {
            let forumPosts = JSON.parse(localStorage.getItem("forumPosts"));
            forumPosts[this.index].replies.unshift({
                author: this.author,
                content: this.content,
                posted: new Date()
            });
            localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
        }
    }
}
</script>

<template>
    <form>
        <label>Author: </label>
        <input name="author" type="text" v-model="author" />

        <label>Reply: </label>
        <textarea name="content" v-model="content"></textarea>
        <input type="submit" value="Submit" @click="submit" />
    </form>
    <p>{{ error }}</p>
</template>