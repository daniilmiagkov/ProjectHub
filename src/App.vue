<script setup lang="ts">
/*
import HelloWorld from '@components/HelloWorld.vue'
*/
import AllToDoList from '@components/AllToDoList.vue'
import SingleToDoList from "./components/SingleToDoList.vue";
import AboutTask from "./components/EditTask.vue";
</script>

<template>
  <div class="app">
    <SingleToDoList/>
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

}

</style>
