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
            <div v-for="interest of allInterests">
                <input type="checkbox" :id="interest" :value="interest" v-model="userInterests">
                <label :for="interest">#{{ interest }}</label>
            </div>
            <button @click="$emit('closeModal')">Close</button>
        </div>
    </div>
</template>

<style scoped>
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
