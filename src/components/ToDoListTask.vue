<template>
  <button class="to-do-list__task button">
    <span class="to-do-list__number to-do-list__item">{{number}}</span>
    <span class="to-do-list__description to-do-list__item">{{description}}</span>
    <span class="to-do-list__date to-do-list__item">19.02.2024</span>
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  number: Number,
  description: String,
})
</script>

<style scoped lang="scss">
.to-do-list__task {
  background-color: #ffffff;
  width: 90%;
  height: 50px;
  margin: 0 auto 8px;
  padding: 4px 10px;
  display: flex;
  border-radius: 10px;
  border: 1px black solid;
  justify-content: space-between;
  align-items: center;
}

.button:hover {
  background-color: #e8e7e8;
}
.to-do-list__item {
  min-width: 30px;
  flex-shrink: 1;
}
.to-do-list__date {
  flex-shrink: 0;
}
</style>
