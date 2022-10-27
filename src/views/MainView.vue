<script>
import OpportunityCard from "../components/OpportunityCard.vue";
import InterestsModal from "../components/InterestsModal.vue"

export default {
    components: { OpportunityCard, InterestsModal },
    data() {
        return {
            opportunities: JSON.parse(localStorage.getItem("opportunities")),
            reccomendations: [],
            userInterests: JSON.parse(localStorage.getItem("userInterests")),
            showInterestsModal: false,
        }
    },
    methods: {
        reccomendOpportunities() {

        }
    }
}
</script>

<template>
    <div class="root">
        <div class="content">
            <h1>Recommended opportunities</h1>
            <hr>
            <div v-for="opportunity in reccomendations">
                <OpportunityCard :title="opportunity.title" :organizer="opportunity.organizer"
                    :location="opportunity.location" :date="opportunity.date" :interests="opportunity.interests"
                    :imageURL="opportunity.imageURL" />
            </div>
        </div>
        <div class="right-sidebar">
            <h2>My interests</h2>
            <hr />
            <div v-for="interest in userInterests" :key="interest">
                <p>#{{ interest }}</p>
            </div>
            <button @click="showInterestsModal = true">{{ userInterests.length
                    >= 3 ? "Edit" : "Add"
            }}</button>
            <!--Todo: make it so that you don't have to reload the page to update the list of interests-->
            <InterestsModal v-if="showInterestsModal" @closeModal="() => {
                showInterestsModal = false
            }" />
        </div>
    </div>
</template>

<style scoped>
/* Apply this to all buttons */

button {
    background-color: var(--light-blue);
    color: var(--dark-blue);
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
}

button:hover {
    background-color: var(--dark-blue);
    color: var(--light);

}

.root {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.content {
    flex-basis: 80%;
}

.right-sidebar {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 2rem;
    margin-left: 2rem;
    flex-basis: 20%;
}
</style>