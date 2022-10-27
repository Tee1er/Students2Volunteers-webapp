<script>
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    RouterView,
    Sidebar,
  },
}
</script>

<template>
  <div id="app">
    <Sidebar class="sidebar" />
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
  height: 100%;
  min-width: 100vw;
}

hr {
  border: 1px solid var(--gray);
}

.root {
  margin: 2rem;
}
</style>
