<script setup lang="ts">
/*
import HelloWorld from '@components/HelloWorld.vue'
*/
import AllToDoList from '@components/AllToDoList.vue'
</script>

<template>
  <div>
    <AllToDoList></AllToDoList>
  </div>
</template>

<style lang="scss">
@import "./css/style.css";

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}


</style>
