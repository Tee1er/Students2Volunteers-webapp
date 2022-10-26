<script>
import OpportunityCard from "../components/OpportunityCard.vue";

export default {
    components: { OpportunityCard },
    data() {
        return {
            opportunities: JSON.parse(localStorage.getItem("opportunities")),
        }
    }
}
</script>

<template>
    <div>
        <h1>Recommended opportunities</h1>
        <hr>
        <div v-for="opportunity in opportunities">
            <OpportunityCard :title="opportunity.title" :organizer="opportunity.organizer"
                :location="opportunity.location" :date="opportunity.date" :interests="opportunity.interests"
                :imageURL="opportunity.imageURL" />
        </div>
    </div>
</template>

<style scoped>
OpportunityCard {
    background: red;
}
</style>