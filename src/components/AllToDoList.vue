<template>
  <div class="all-to-do-list">
    <button class="button all-to-do-list__button"
        @click="getListSubjects"></button>
    <div class="subject" v-for="item in listSubjects" :key="item.id">
      {{ item.subjectName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
let listSubjects = ref([]);
function getListSubjects() {
  fetch('http://localhost:3000/database/listSubjects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Проверяем, что данные не пусты, прежде чем с ними работать
        if (data && Object.keys(data).length > 0) {
          listSubjects.value = data.subjects
          console.log(data.subjects);
          // Теперь можешь обрабатывать данные
        } else {
          console.error('Получены пустые данные');
        }
      })
      .catch((error: Error) => console.log(error));
}
</script>

<style scoped lang="scss">
@import "../css/colors.scss";
.all-to-do-list {
  display: flex;
}

.subject {
  background-color: red;
}

.all-to-do-list__button {

}
</style>
