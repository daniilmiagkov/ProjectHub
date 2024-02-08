<template>
  <div class="list">
    <h3 class="list__title" @click="isShow = !isShow">название</h3>
    <div v-bind:class="{ list__grid_show: isShow, list__grid_hide: !isShow} ">
      <div class="list__grid-element" v-for="item in list" @click="isShowModal = !isShowModal">
      </div>
    </div>
  </div>
  <EditTask
      v-bind:class="{'edit-task_show': isShowModal, 'edit-task_hide': !isShowModal}">
  </EditTask>
</template>

<script setup lang="ts">
import {ref} from "vue";
import EditTask from "./EditTask.vue";

const list = ref([]);
let isShow = ref(false);
let isShowModal = ref(false);
for (let i = 0; i < Math.random() * 10 + 5; i++) {
  list.value.push(i);
}

function show() {
  isShow.value = !isShow.value;
}

function showEdit() {

}

</script>

<style scoped lang="scss">

.list {
  padding: 10px;
}

.list__grid_show {
  display: grid;
  margin: 10px auto;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  //grid-template-rows: repeat(4, 1fr);
  width: 100%;
  //height: 50%;
  gap: 5px;
}

.list__grid_hide {
  display: none;
}

.edit-task_show {
  margin: 10px auto;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: 25%;
  z-index: 1000;
  background-color: rgb(255, 139, 139);
}

.edit-task_hide {
  display: none;
}



.list__grid-element {
  background-color: white;
  border-radius: 5px;
  padding-top: 100%;

}
</style>
