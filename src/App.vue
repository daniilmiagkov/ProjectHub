<template>
  <div class="app">
<!--    <TodayList :class="{'blur': modal.show}"/>-->
    <AllToDoList
        :class="{'blur': modal.show}"
    />
    <EditTask
        @submit="handleSubmitEvent"></EditTask>
  </div>
</template>

<script setup lang="ts">
import AllToDoList from './components/AllToDoList.vue'
/*
import TodayList from "./components/TodayList.vue";
*/
import EditTask from "./components/EditTask.vue";
import {provide, ref} from "vue";
import {Lab} from "../backend/types/Subject";
const modal = ref<object>({
  show: false,
  data: null }
);
const submit = ref<object>({
  data: Lab
})
provide('submit', submit);
provide('modal', modal);
function handleSubmitEvent(data: object) {
  submit.value.data = data
}

</script>

<style lang="scss">
@import "./css/style.css";
body {
}
.blur {
  filter: blur(4px);
  transition: filter 0.5s linear;
}
.app {
  margin: 20px;
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  //display: grid;
  //justify-items: center;
  //gap: 20px;
  //grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
}

</style>
