<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{path}}</h1>
    <div class="to-do-list__list" v-for="item in list">
      <button class="to-do-list__task" @click="show(item.description)">
        <span>{{item.taskNumber}}</span>
        <span>{{item.description}}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
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
  background-color: #535bf2;
}

.to-do-list__list {
  background-color: #7b7a7d;
  display: flex;
  flex-direction: column;
}

.to-do-list__title {
  background-color: #e8e7e8;
  margin: 5px 10px 10px;
  font-size: 1.5em;
}

.to-do-list__task {
  background-color: #88c459;
  width: 100%;
  height: 30px;
}

</style>
