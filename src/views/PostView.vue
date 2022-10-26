<script>

export default {
    data() {
        return {
            title: "",
            organizer: "",
            location: "",
            date: undefined,
            interests: [],
            imageURL: "",
            allInterests: JSON.parse(localStorage.getItem('allInterests')),
            selectedInterests: [],
        }
    },
    methods: {
        submit() {
            if (localStorage.getItem("opportunities")) {
                let opportunities = JSON.parse(localStorage.getItem("opportunities"));
                opportunities.push({
                    title: this.title,
                    organizer: this.organizer,
                    location: this.location,
                    date: this.date,
                    interests: this.selectedInterests,
                    imageURL: this.imageURL,
                });
                localStorage.setItem("opportunities", JSON.stringify(opportunities));
            } else {
                let opportunities = [{
                    title: this.title,
                    organizer: this.organizer,
                    location: this.location,
                    date: this.date,
                    interests: this.selectedInterests,
                    imageURL: this.imageURL,
                }];
                localStorage.setItem("opportunities", JSON.stringify(opportunities));
            }
        }
    }

}
</script>

<template>
    <div>
        <h1>Post an opportunity</h1>
        <hr>
        <form>
            <label>Title:</label>
            <input name="title" type="text" v-model="title" />
            <label>Organizer:</label>
            <input name="organizer" type="text" v-model="organizer" />
            <label>Location:</label>
            <input name="location" type="text" v-model="location" />
            <!--Todo: allow entering a range of dates-->
            <!--Todo: date parsing can be done with watchers https://vuejs.org/tutorial/#step-10-->
            <label>Date:</label>
            <input name="date" type="date" v-model="date" @blur="() => this.date = new Date(this.date)" />
            <label>Image URL</label>
            <input type="url" v-model="imageURL" />
            <p>Interests</p>
            <div v-for="interest of allInterests" :key="interest">
                <input type="checkbox" :id="interest" :value="interest" v-model="selectedInterests">
                <label :for="interest">#{{ interest }}</label>
            </div>

            <input type="submit" value="Submit" @click="submit" />
        </form>
    </div>
</template>

<style scoped>

</style>