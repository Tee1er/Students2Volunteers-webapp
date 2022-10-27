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
                    <h3>{{ date }}</h3>
                </section>
                <section>
                    <p>Location</p>
                    <h3>{{ location }}</h3>
                </section>
            </div>
            <hr>
            <p>Interests</p>
            <ul v-for="interest in interests">
                <li>{{ interest }}</li>
            </ul>
        </div>
        <img class="opportunity-image" :src="imageURL" />

    </div>
</template>

<style scoped>
p {
    font-weight: 600;
    color: var(--less-dark)
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