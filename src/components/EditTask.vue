<template xmlns="http://www.w3.org/1999/html">
  <div v-if="modal.show" class="edit-task">
    <h1 class="edit-task__title">Edit</h1>
    <form class="edit-task__form">
      <label class="input" for="input-title">
        <span class="input__title">title</span>
        <input class="input__input" id="input-title" type="text" value="Lab"/>
      </label>
      <label class="input" for="input-file">
        <span class="input__title">file</span>
        <input class="input__input input_file" id="input-file" type="file" @change="loadFile"/>
        <span class="button-file" id="button-file">{{fileName}}</span>
      </label>

      <label class="input" for="input-date">
        <span class="input__title">date</span>
        <input class="input__input" id="input-date" type="date"/>
      </label>
    </form>
    <button class="edit-task__button-close button" @click="closeModal">Close</button>

  </div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

const modal = inject('modal');
onMounted(() => {
  console.log('ok')
})
const closeModal = () => {
  modal.value.show = false;
};

const fileName = ref("");
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
  /*display: flex;*/
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
  position: absolute;
  top: 15%;
  z-index: 9000;
  background-color: rgb(255, 139, 139);
}

.edit-task__button-close {
  display: block;
  /*position: relative;*/
  position: absolute;
  bottom: 20px;
  margin: 10px auto;
  left: 50%;
  transform: translateX(-50%);
  /*margin: 0 auto;*/
  height: 60px;
  width: 200px;
  border-radius: 10px;
  font-size: 1em;
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
  display: block;
}

.input__input, .button-file, .input_file {
  background-color: white;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  padding: 5px;
  font-family: inherit;
  font-size: 1em;
}
.input {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
}


</style>
