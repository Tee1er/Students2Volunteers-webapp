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
}

hr {
  border: 1px solid var(--gray);
  margin: 0.5rem 0;
}
</style>
<style scoped>
.sidebar {}
</style>
