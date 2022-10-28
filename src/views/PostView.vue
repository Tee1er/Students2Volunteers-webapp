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
    <div class="root view">
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
            <p>Enter in the URL for the image to displayed with your opportunity.</p>
            <input type="url" v-model="imageURL" />
            <hr>
            <label>Interests</label>
            <p>Select interests for your opportunity below. </p>
            <div>
                <section v-for="interest of allInterests" :key="interest" class="checkbox-group">

                    <label><input type="checkbox" :id="interest" :value="interest" v-model="selectedInterests" />
                        #{{ interest }}
                    </label>
                </section>
            </div>

            <hr>

            <input type="submit" value="Submit" @click="submit" />
        </form>
    </div>
</template>

<style scoped>
form div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 25rem;
}

/* Style checkboxes */
.checkbox-group {
    border: 1px solid var(--gray);
    margin: 0.2rem;
    border-radius: 0.25rem;
    padding: 0.15rem;
}

.checkbox-group label {
    margin-left: 0.2rem;
}

input[type=checkbox] {
    width: 0.75rem;
    height: 0.75rem;
}

input[type=checkbox]:checked {
    accent-color: var(--dark-blue);
}

input[type="text"],
input[type="date"],
input[type="url"] {
    display: block;
    padding: 0.25rem;
    width: 50%;
    margin-left: 0.25rem;
    border: 1px solid var(--gray);
    font-family: inherit;
}

form>label {
    display: block;
    margin: 0.5rem 0;
    font-weight: 700;
}

form hr {
    display: block;
    margin: 1rem 0;
}

p {
    font-size: 0.75rem;
}

.view {
    padding: 0.25rem;
    overflow-x: hidden;
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
}

input[type=submit]:hover {
    background-color: var(--dark-blue);
    color: var(--light);
    transition: 0.5s;
}
</style>