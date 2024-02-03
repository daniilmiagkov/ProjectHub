<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{path}}</h1>
    <div class="to-do-list__list" >
      <ToDoListTask
          v-for="item in list"
          v-model:description="item.description"
          v-model:number="item.taskNumber"
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
  fetch('http://localhost:3000/database/'
      + 'subject_' + props.path + '.json' )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log(response)
        }
      })
      .then((data) => {
        list.value = data.tasks;
      })
      .catch((error) => console.log(error))
}
console.log(props.path)
getSubjectFromPath();

</script>

<style scoped lang="scss">
.to-do-list {
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 10px;
  /*
  margin: 20px;
  */
}

.to-do-list__list {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.to-do-list__title {
  margin: 5px 10px 10px;
  font-size: 1.5em;
}


</style>
