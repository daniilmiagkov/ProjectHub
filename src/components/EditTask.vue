<template xmlns="http://www.w3.org/1999/html">
  <div class="edit-task">
    <h1 class="edit-task__title">Edit</h1>
    <form class="edit-task__form">
      <label class="input" for="input-title">
        <span class="input__title">title</span>
        <input class="input__input" id="input-title" type="text" value="Lab"/>
      </label>
      <label class="input" for="input-file">
        <span class="input__title">file</span>
        <input class="input__input input_file" id="input-file" type="file" @change="loadFile"/>
        <div class="button-file" id="button-file"></div>
      </label>

      <label class="input" for="input-date">
        <span class="input__title">date</span>
        <input class="input__input" id="input-date" type="date"/>
      </label>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";


function loadFile(event) {
  document.getElementById('button-file').innerText = "fdsf";

  // const file = event.target.files[0];
  // if (file) {
  //   const reader = new FileReader();
  //   reader.onload = function(e) {
  //     // Обрабатываем содержимое файла, например, выводим его имя
  //     document.getElementById('button-file').innerHTML = file.name;
  //     console.log(document.getElementById('button-file').textContent)
  //   };
  //   reader.readAsText(file);
  // }
}


</script>

<style scoped>
.edit-task {
  background-color: rgb(169, 196, 238);
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  height: 400px;
  flex-shrink: 0;
  /*max-width: 400px;*/
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
  width: 60%;
  height: 100%;
  border-radius: 10px;
  padding: 5px;
}

.input {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
}
</style>
