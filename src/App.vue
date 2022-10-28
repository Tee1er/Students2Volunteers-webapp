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
    <router-view class="viewport" />
  </div>
</template>

<style>
#app {
  display: flex;
  height: 100%;
  min-width: 100vw;
}

.sidebar {
  position: sticky;
  top: 0;
}

.viewport {
  overflow: scroll;
  width: 100%;
}

hr {
  border: 1px solid var(--gray);
}

.view {
  margin: 2rem;
}
</style>
