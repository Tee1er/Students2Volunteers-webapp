<script>
export default {
    methods: {
        clearLocalStorage() {
            localStorage.clear();
        }
    }
}
</script>

<template>
    <div class="root">
        <h1>Settings</h1>
        <hr>
        <h2>Clear app storage</h2>
        <p>This will erase all user-generated content: posts, replies, etc. It does <i>not</i> erase blog posts, contact
            info, etc.</p>
        <button @click="clearLocalStorage">Clear storage</button>

        <button @click="$emit('closeModal')">Close</button>
    </div>
</template>

<style scoped>
.root {
    background: var(--light);
    border: 1px solid var(--gray);
    padding: 2rem;
    position: absolute;
    top: 0rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 40rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}
</style>