<template>
  <div class="list">
    <h3 class="list__title" @click="isShow = !isShow">название</h3>
    <div v-bind:class="{ list__grid_show: isShow, list__grid_hide: !isShow} ">
      <div class="list__grid-element" v-for="item in list" @click="openModal(item)">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { inject } from 'vue';

const modal = inject('modal');

const openModal = (item) => {
  modal.value.show = true;
  console.log(modal.value)
  modal.value.data = item;
};
const list = ref([]);
let isShow = ref(false);
for (let i = 0; i < Math.random() * 10 + 5; i++) {
  list.value.push(i);
}

function show() {
  isShow.value = !isShow.value;
}

</script>

<style scoped lang="scss">

.list {
  padding: 10px 10px 10px;
}

.list__title{
  padding: 4px 10px 10px;
}

.list__grid_show {
  display: grid;
  margin: 10px auto;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  //grid-template-rows: repeat(4, 1fr);
  width: 100%;
  //height: 50%;
  gap: 5px;
}

.list__grid_hide {
  display: none;
}

.list__grid-element {
  background-color: white;
  border-radius: 5px;
  padding-top: 100%;

}
</style>
