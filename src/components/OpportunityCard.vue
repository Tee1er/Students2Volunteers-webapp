<script>
export default {

    props: {
        title: String,
        organizer: String,
        location: String,
        date: Date,
        interests: Array,
        imageURL: String,
    }
}
</script>

<template>
    <div class="root">
        <div>
            <h2>{{ title }}</h2>
            <hr>
            <div class="details-container">
                <section>
                    <p>Date</p>
                    <h3>{{ date.toDateString() }}</h3>
                </section>
                <section>
                    <p>Location</p>
                    <h3>{{ location }}</h3>
                </section>
            </div>
            <hr>
            <p>Interests</p>
            <section class="interest" v-for="interest in interests">#{{ interest }}</section>
        </div>
        <div class="image-container">
            <img :src="imageURL" />
        </div>

    </div>
</template>

<style scoped>
p {
    font-weight: 600;
    color: var(--less-dark)
}

.image-container {
    max-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-height: 20rem;
    overflow-y: hidden;
    border-radius: 0.25rem;
}

.interest {
    border: 1px solid var(--gray);
    margin-top: 0.2rem;
    border-radius: 0.25rem;
    padding: 0.15rem 0.5rem;
    display: block;
}

.details-container {
    display: flex;
    flex-basis: 1;
}

.details-container section>* {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.details-container section+section {
    margin-left: 1rem;
}

.root {
    background: var(--light);
    border: 1px solid var(--gray);
    display: flex;
    padding: 2rem;
    min-width: 0;
    /* max-height: 20rem; */
}
</style>