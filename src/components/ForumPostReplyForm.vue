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

<style scoped>
input[type="text"] {
    display: block;
    padding: 0.25rem;
    width: 50%;
    margin-left: 0.25rem;
    border: 1px solid var(--gray);
    font-family: inherit;
}

textarea {
    display: block;
    padding: 0.25rem;
    width: 50%;
    margin-left: 0.25rem;
    border: 1px solid var(--gray);
    font-family: inherit;
    height: 5rem;
}

form>label {
    display: block;
    margin: 0.5rem 0;
    font-weight: 700;
}

input[type=submit] {
    background-color: var(--light-blue);
    color: var(--dark-blue);
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    margin: 1rem 0;
}

input[type=submit]:hover {
    background-color: var(--dark-blue);
    color: var(--light);
    transition: 0.5s;
}
</style>