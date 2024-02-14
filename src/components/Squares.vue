<template>
  <div class="list">
    <h3 class="list__title" @click="isShow = !isShow">{{props.title}}</h3>
    <div v-bind:class="{ list__grid_show: isShow, list__grid_hide: !isShow} ">
<!--      <div-->
<!--          class="list__grid-element"-->
<!--          v-for="item in props.list"-->
<!--          ></div>-->
      <Square
          class="list__grid-element"
          v-for="item in props.list"
          :Type = "item.Type"
          :isRadio = "item.Type"
          @click="openModal(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import { inject } from 'vue';
import Square from "./Square.vue";

const modal = inject('modal');
const props = defineProps({
  title: String,
  list: Array
})
const openModal = (item) => {
  modal.value.show = true;
  modal.value.data = item;
  // console.log(item)
};
let isShow = ref(false);

function show() {
  isShow.value = !isShow.value;
}

</script>

<style scoped lang="scss">

.list {
  padding: 4px 10px 6px;
}

.list__title{
  padding: 4px 10px 6px;
  cursor: pointer;
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
  cursor: pointer;

}
</style>
