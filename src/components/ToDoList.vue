<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{path}}</h1>
    <div class="to-do-list__list" >
      <ToDoListTask
          v-for="item in list"
          v-model:path="item.path"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import ToDoListTask from "./ToDoListTask.vue";
const props = defineProps({
  path: String,
})

let list = ref([]);

function show(data) {
  alert(data)
}

function getSubjectFromPath() {
  fetch(
      `http://localhost:3000/database/db_${props.path}/${props.path}_subject.json` )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log(response)
        }
      })
      .then((data) => {
        list.value = data.Labs;
        console.log(data.Labs)
      })
      .catch((error) => console.log(error))
}
getSubjectFromPath();

</script>

<style scoped lang="scss">
.to-do-list {
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  /*
  max-width: 250px;
  */
  min-height: 150px;
  width: 250px;
  /*

  margin: 20px;
  */
}

.to-do-list__list {
  border: 1px solid black;
  border-radius: 10px;
  overflow: auto;
  width: 90%;
  margin: 0 auto;
  height: 60%;
}

.to-do-list__list::-webkit-scrollbar {
  width: 0;
}

.to-do-list__title {
  margin: 5px 10px 10px;
  font-size: 1.5em;
}


</style>
