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
    <div class="root view">
        <router-link to="/forum" class="back">
            ◁ Back</router-link>
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
.back {
    color: var(--dark);
    display: inline-block;
    text-decoration: none;
    border-radius: 0.25rem;
}

.back:hover {
    text-decoration: underline;
    transition: 0.5s;
}

input[type="text"] {
    display: block;
    padding: 0.25rem;
    width: 50%;
    margin-left: 0.25rem;
    border: 1px solid var(--gray);
    font-family: inherit;
}

form hr {
    display: block;
    margin: 1rem 0;
}

form>label {
    display: block;
    margin: 0.5rem 0;
    font-weight: 700;
}

textarea {
    display: block;
    padding: 0.25rem;
    width: 50%;
    margin-left: 0.25rem;
    border: 1px solid var(--gray);
    font-family: inherit;
    height: 10rem;
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