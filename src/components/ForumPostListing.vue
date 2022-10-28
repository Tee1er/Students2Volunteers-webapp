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
            <hr>
            <div>
                <p><b>Replies:</b> {{ post.replies.length }}</p>
                <p><b>Last reply:</b> {{ post.replies[0] ? post.replies[0].date : "--" }}</p>
                <p><b>Date posted:</b> {{ new Date(post.posted).toDateString() }}</p>
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



.root * {
    margin: 0;
}

h2:hover {
    color: var(--dark-blue);
    transition: 0.5s;
}

.root hr {
    margin: 1rem 0;
}


.root * {
    text-decoration: none;
    color: var(--dark);
}

.root div {
    display: flex;
}

.root div p {
    display: inline-block;
    margin-right: 1rem;
    border: 1px solid var(--gray);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;

}
</style>