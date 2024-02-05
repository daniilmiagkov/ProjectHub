<template>
  <div class="today-list">
    <h1 class="today-list__title">Today</h1>
    <div class="today-list__list" >
      <ToDoListTask
          v-for="item in list"
          v-model:path="item.path"
      />
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

let list = ref([]);


</script>

<style scoped>

.today-list {
  padding: 10px;
  width: 100%;
  background-color: rgb(169, 196, 238);
  height: 200px;
  border-radius: 10px;
}


</style>
