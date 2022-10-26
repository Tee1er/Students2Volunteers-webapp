<script>
export default {
}
</script>

<template>
    <div class="root">
        <img class="sidebar-logo" src="../assets/logo-transparent-outline.png">
        <hr>
        <div class="links">
            <section class="explore">
                <ion-icon name="telescope"></ion-icon>
                <router-link to="/">Explore</router-link>
            </section>
            <section class="post">
                <ion-icon name="document-text"></ion-icon>
                <router-link to="post">Post</router-link>
            </section>
            <section class="forum">
                <ion-icon name="chatbubbles"></ion-icon>
                <router-link to="forum">Forum</router-link>
            </section>
            <section class="blog">
                <ion-icon name="newspaper"></ion-icon>
                <router-link to="">Blog posts</router-link>
            </section>
            <section class="contact">
                <ion-icon name="call"></ion-icon>
                <router-link to="">Contact</router-link>
            </section>
            <section class="profile">
                <ion-icon name="person-circle"></ion-icon>
                <router-link to="">Profile</router-link>
            </section>
        </div>
    </div>
</template>

<style scoped>
.root {
    background: var(--light);
    border: 1px solid var(--gray);
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.root section {
    margin: 0.125rem 0;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
}

.sidebar ion-icon {
    font-size: 1.5rem;
}

a {
    margin-left: 0.75rem;
    text-decoration: none;
    color: var(--dark);
    font-weight: 700;
}

.sidebar section:hover {
    background: var(--light-blue);
    transition: 0.5s;
}

.sidebar section:hover * {
    color: var(--dark-blue);
    transition: 0.5s;
}
</style>