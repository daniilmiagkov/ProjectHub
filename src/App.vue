<script setup lang="ts">
import AllToDoList from '@components/AllToDoList.vue'
import AboutTask from "./components/EditTask.vue";
import TodayList from "./components/TodayList.vue";

</script>

<template>
  <div class="app">
    <TodayList/>
    <AllToDoList/>
    <AboutTask/>
  </div>
</template>

<style lang="scss">
@import "./css/style.css";
body {
  min-height: 100vh;
}

.app {
  margin: 20px;
  display: grid;
  justify-items: center;
  row-gap: 20px;
}

</style>
