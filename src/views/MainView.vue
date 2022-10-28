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
            let reccomendations = []

            for (let i = 0; i < this.opportunities.length; i++) {
                let score = 0;
                let opportunity = this.opportunities[i];

                for (let j = 0; j < opportunity.interests.length; j++) {
                    let interest = opportunity.interests[j];

                    if (this.userInterests.includes(interest)) {
                        score += 10;
                    }
                }
                reccomendations.push({ index: i, score });
            }
            // Sort the reccomendations by score
            reccomendations.sort((a, b) => a.score - b.score);

            // Get the top 10 reccomendations
            return reccomendations.slice(0, 10)
        }
    },
    created() {
        this.reccomendations = this.reccomendOpportunities();
    }
}
</script>

<template>
    <div class="root view">
        <div class="content">
            <h1>Recommended opportunities</h1>
            <hr>
            <div class="opportunity-container">
                <OpportunityCard v-for="n in reccomendations.length" :title="this.opportunities[n - 1].title"
                    :organizer="opportunities[n - 1].organizer" :location="opportunities[n - 1].location"
                    :date="new Date(opportunities[n - 1].date)" :interests="opportunities[n - 1].interests"
                    :imageURL="opportunities[n - 1].imageURL" />
            </div>
        </div>
        <div class="right-sidebar">
            <h2>My interests</h2>
            <hr />
            <p v-for="interest in userInterests" :key="interest">#{{ interest }}</p>
            <button @click="showInterestsModal = true">{{ userInterests.length
                    >= 3 ? "Edit" : "Add"
            }}</button>
            <!--Todo: make it so that you don't have to reload the page to update the list of interests-->
            <!--this is so bad, tempororary fix: reloads the page so that the list of interests updates, thankfully not too noticeable :)-->
            <InterestsModal v-if="showInterestsModal" @closeModal="() => {
                showInterestsModal = false
                this.$router.go()
            }" />
        </div>
    </div>
</template>

<style scoped>
.opportunity-container {
    margin-top: 1rem;
}

.right-sidebar>p {
    border: 1px solid var(--gray);
    border-radius: 0.25rem;
    padding: 0.15rem 0.5rem;
    display: block;
    margin: 0.5rem 0;
}

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
    transition: 0.5s;
}

.root {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.content {
    flex-basis: 75%;
}

.right-sidebar {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 2rem;
    margin-left: 2rem;
    flex-basis: 25%;
}
</style>