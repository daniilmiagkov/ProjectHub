<template>
  <div class="edit-task">
    <h1 class="edit-task__title">Edit</h1>
    <form class="edit-task__form">
      <label class="input" for="input-title">
        <span class="input__title">title</span>
        <input class="input__input" id="input-title" type="text" value="Lab"/>
      </label>
      <label class="input" for="input-file">
        <span class="input__title">file</span>
        <input class="input__input input_file" id="input-file" type="file"/>
        <span class="button-file"></span>
      </label>
      <label class="input" for="input-date">
        <span class="input__title">date</span>
        <input class="input__input" id="input-date" type="date"/>
      </label>
    </form>
  </div>
</template>

<script setup>

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
}

.input__input,.button-file,.input_file {
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
