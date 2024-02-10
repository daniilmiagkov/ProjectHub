<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{subject.Title}}</h1>
    <Squares title="Лабораторные"></Squares>
    <Squares title="Посещения"></Squares>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import ToDoListTask from "./ToDoListTask.vue";
import List from "./Squares.vue";
import Squares from "./Squares.vue";
const props = defineProps({
  path: String,
})

let subject = ref([]);

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
        subject.value = data;
        // console.log(data.Labs)
      })
      .catch((error) => console.log(error))
}
getSubjectFromPath();


</script>

<style scoped lang="scss">
@import "../css/colors.scss";

.to-do-list {
  background-color: $color-primary-light;
  border-radius: 10px;
}

.to-do-list__list {
  border-radius: 10px;
  overflow: auto;
  width: 90%;
  margin: 0 auto;
}

.to-do-list__list::-webkit-scrollbar {
  width: 0;
}

.to-do-list__title {
  margin: 20px 20px 10px;
  font-size: 1.5em;
}


</style>
