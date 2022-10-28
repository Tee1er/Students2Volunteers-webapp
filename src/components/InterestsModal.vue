<script>
export default {
    data() {
        return {
            allInterests: JSON.parse(localStorage.getItem('allInterests')),
            userInterests: JSON.parse(localStorage.getItem('userInterests')),
        }
    },
    watch: {
        userInterests: {
            handler: (newVal, oldVal) => {
                localStorage.setItem("userInterests", JSON.stringify(newVal));
            },
            deep: true
        }
    }
}
</script>



<template>
    <!--Todo: clean up the CSS here-->
    <div class="modal">
        <div class="card">
            <h1>Add or remove interests</h1>
            <hr>
            <div>
                <section v-for="interest of allInterests" class="checkbox-group">
                    <input type="checkbox" :id="interest" :value="interest" v-model="userInterests">
                    <label :for="interest">#{{ interest }}</label>
                </section>
            </div>
            <button @click="$emit('closeModal')">Close</button>
        </div>
    </div>
</template>

<style scoped>
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

.checkbox-group {
    border: 1px solid var(--gray);
    margin: 0.2rem;
    border-radius: 0.25rem;
    padding: 0.15rem;
}

.card>div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 25rem;
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

.card {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 2rem;
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 40rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}

.card {
    z-index: 10000;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}
</style>
