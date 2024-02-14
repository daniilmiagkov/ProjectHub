<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{subject.Title}}</h1>
    <Squares
        v-if="isLabs"
        title="Лабораторные"
        :list="subject.Labs"
    ></Squares>
<!--    <Squares-->
<!--        v-if="subject.Visitis.length > 0"-->
<!--        title="Посещения"></Squares>-->
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import Squares from "./Squares.vue";
const props = defineProps({
  path: String,
})

const isLabs = ref(true)

let subject = ref([]);

fetch(`http://localhost:3000/database/${props.path}/${props.path}_subject.json` )
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
      // console.log(data)
      if (subject.value.Labs.length > 0) {
        isLabs.value = true
      }
      else {
        isLabs.value = false
      }
      // console.log(subject.value.Labs)
    })
    .catch((error) => console.log(error))


</script>

<style scoped lang="scss">
@import "../css/colors.scss";

.to-do-list {
  background-color: $color-primary-light-1;
  border-radius: 10px;
  height: 100%;
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
