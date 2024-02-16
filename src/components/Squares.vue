<template>
  <div class="list">
    <h3 class="list__title" @click="isShow = !isShow">{{props.title}}</h3>
    <div v-bind:class="{ list__grid_show: isShow, list__grid_hide: !isShow} ">
      <!--      <div-->
      <!--          class="list__grid-element"-->
      <!--          v-for="item in props.list"-->
      <!--          ></div>-->
      <Square
          v-for="(item, index) in props.list"
          :Type = "item.Type"
          :isRadio = "item.Type"
          @click="openModal(item, index)"
          :class="{
            'list__grid-element': index !== props.list.length - 1,
            'list__grid-element-add': index === props.list.length - 1
          } "
          :Add="index === props.list.length - 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import { inject } from 'vue';
import Square from "./Square.vue";
import {Lab} from "../../backend/types/Subject";

const modal = inject('modal');
const props = defineProps({
  title: String,
  list: Array
})
const openModal = (item: Lab, index: number) => {
  modal.value.show = true;
  modal.value.data = item;
  if (index === props.list.length -1) {
    const lab = Object.assign({}, item)
    lab.FileName = lab.FileName
    props.list.push(lab);
  }
  // console.log(item)
};
let isShow = ref(false);

</script>

<style scoped lang="scss">
@import '../css/colors.scss';
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
  border-radius: 5px;
  aspect-ratio: 1; /* Определяет соотношение сторон, чтобы ширина и высота были в пропорции 1:1 */
  //height: 100%;
  cursor: pointer;

}
.list__grid-element-add {
  border-radius: 5px;    aspect-ratio: 1; /* Определяет соотношение сторон, чтобы ширина и высота были в пропорции 1:1 */

  //height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
