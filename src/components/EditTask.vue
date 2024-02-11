<template xmlns="http://www.w3.org/1999/html">
  <div v-show="modal.show" class="edit-task" @show="handleShow">
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
        <span class="input__title">{{lab.Subject}}</span>
      </div>
      <label class="input" for="input-title">
        <span class="input__title">{{lab.Subject}}</span>
        <input class="input__input" id="input-title" type="text" value="Lab"/>
      </label>
      <label class="input" for="input-file-method">
        <span class="input__title">Методичка</span>
        <input
            class="input__input input_file"
            id="input-file-method" type="file"
            @change="loadFile(fileNameMethod, $event)"/>
        <span class="button-file" id="button-file">{{ fileNameMethod.name }}</span>
      </label>
      <label class="input" for="input-file-lab">
        <span class="input__title">Файл</span>
        <input
            class="input__input input_file"
            id="input-file-lab" type="file"
            @change="loadFile(fileNameLab, $event)"/>
        <span class="button-file" id="button-file">{{ fileNameLab.name }}</span>
      </label>

      <label class="input" for="input-date">
        <span class="input__title">Дата сдачи</span>
        <input class="input__input" id="input-date" type="date"/>
      </label>
<!--      <div class="edit-task__radiobuttons">
        <label class="input__radio"><input type="radio" name="type" />done</label>
        <label class="input__radio"><input type="radio" name="type" />not done</label>
        <label class="input__radio"><input type="radio" name="type" />process</label>
        <label class="input__radio"><input type="radio" name="type" />accepted</label>
        <label class="input__radio"><input type="radio" name="type" />overdue</label>
      </div>-->
      <div class="edit-task__radiobuttons">
        <div v-for="(item, index) in lab.Types"
             class="radio__label"
             @mouseover="hoverHandler(index)"
             @mouseout="hoverHandler(null)">
          <label


          >
            <input type="radio" name="type" />
            <div class="radio__text"></div>

          </label>
          <div :class="{
            'radio_hover': isHover === index,
            'radio_non-hover': isHover !== index
          }">{{item}}</div>
        </div>

      </div>
    </form>
      <button
          class="
        edit-task__button-edit
        button"
          @click="">Редактировать</button>


  </div>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue";
const modal = inject('modal');
const isHover = ref(false);

let lab = ref({})

onMounted(()=> {
// Вызовем функцию при первоначальном отображении компонента
  handleShow();

  // Следим за изменениями modal.show
  watch(() => modal.value.data, (newValue, oldValue) => {
    if (newValue) {
      // Если modal.show изменилось на true, вызываем функцию
      handleShow();
    }
  });
})
const fileNameMethod = ref({name: ""});
const fileNameLab = ref({name: ""});
function hoverHandler(index) {
  this.isHover = index;
}
const closeModal = () => {
  modal.value.show = false;
};
function loadFile(fileName, event) {
  const file = event.target.files[0];
  console.log(event)
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      fileName.name = file.name;
      console.log(fileName);
      // console.log("Имя файла:", fileNameLab.value);
    };
    reader.onerror = function(error) {
      console.error("Ошибка чтения файла:", error);
    };
    reader.readAsText(file);
  }
}

const handleShow = () => {
  // Ваш код для выполнения при отображении компонента
  lab = modal.value.data;
  console.log("lab")
  console.log(lab)
};
</script>

<style scoped lang="scss">
@import "../css/colors.scss";

.radio_non-hover {
  opacity: 0;
  position: absolute;

}
.radio__label{
  width: 60px;
  height: 60px;
  //padding-top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio_hover {
  opacity: 1;
  transition: opacity 0.4s cubic-bezier(0.5,0,1,1);
  position: absolute;

  margin-top:-45px;
  margin-left:105px;
  transform: translate(-20px, 0);
  z-index: 99999;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: $gray-1;
  color: $gray-6;
  display: block;
}
.edit-task__radiobuttons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  justify-items: center;
}
.radio__text {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
}

input[type='radio'] {
  display: none;
}

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
  width: 80%;
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
