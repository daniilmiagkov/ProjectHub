<script setup lang="ts">
import AllToDoList from '@components/AllToDoList.vue'
import TodayList from "./components/TodayList.vue";
import EditTask from "./components/EditTask.vue";

</script>

<template>
  <div class="app">
    <TodayList/>
<!--    <EditTask/>-->
    <AllToDoList/>
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
  gap: 20px;
  grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
}

</style>
