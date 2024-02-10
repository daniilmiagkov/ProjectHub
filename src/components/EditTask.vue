<template xmlns="http://www.w3.org/1999/html">
  <div v-if="modal.show" class="edit-task">
    <div class="edit-task__header">
      <h1 class="edit-task__title"></h1>
      <button
          class="
        edit-task__button-close
        button"
          @click="closeModal">Закрыть</button>
    </div>
    <form class="edit-task__form">

      <div class="input" for="input-title">
        <span class="input__title">Предмет</span>
        <span class="input__title"></span>
      </div>
      <label class="input" for="input-title">
        <span class="input__title">Название</span>
        <input class="input__input" id="input-title" type="text" value="Lab"/>
      </label>
      <label class="input" for="input-file">
        <span class="input__title">Методичка</span>
        <input class="input__input input_file" id="input-file" type="file" @change="loadFile"/>
        <div class="button-file" id="button-file">{{fileName}}</div>
      </label>

      <label class="input" for="input-date">
        <span class="input__title">Дата сдачи</span>
        <input class="input__input" id="input-date" type="date"/>
      </label>
    </form>
      <button
          class="
        edit-task__button-edit
        button"
          @click="">Редактировать</button>


  </div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";


const props = defineProps({
  subject: String,

})
const modal = inject('modal');
const fileName = ref("");

const closeModal = () => {
  modal.value.show = false;
};
function loadFile(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      fileName.value = file.name;
      console.log("Имя файла:", fileName.value);
    };
    reader.onerror = function(error) {
      console.error("Ошибка чтения файла:", error);
    };
    reader.readAsText(file);
  }
}


</script>

<style scoped>
.edit-task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  flex-shrink: 0;
  /*max-width: 400px;*/
  margin: 10px auto;
  width: 70%;
  max-width: 500px;
  height: 50%;
  position: fixed;
  top: 15%;
  z-index: 9000;
  background-color: rgb(255, 139, 139);
}

.edit-task__header {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  width: 90%;
}

.edit-task__button-close, .edit-task__button-edit {
  /*margin: 10px 0;*/
  /*height: 60px;*/
  border-radius: 10px;
  font-size: 1em;
}

.edit-task__button-edit {
  margin: 10px;
  width: 200px;

}

.edit-task__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input__title {
  font-weight: bold;
}

.input_file {
  display: none;
}

.button-file {
  cursor: pointer;
  color: black;
  z-index: 5;
  /*vertical-align: bottom;*/
  vertical-align: baseline; /* Изменено значение на baseline */
  display: inline-flex;
  align-items: center;

}

.input__input, .button-file, .input_file {
  background-color: white;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 1em;
}
.input {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0px 0 20px;
}


</style>
