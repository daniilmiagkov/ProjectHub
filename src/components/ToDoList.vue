<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">{{subject.Title}}</h1>
    <Squares
        v-if="isLabs"
        title="Лабораторные"
        :list="labs"
    ></Squares>
    <Squares
        title="Посещения"></Squares>
  </div>
</template>

<script setup lang="ts">
import {defineProps, inject, onMounted, ref, watch} from "vue";
import Squares from "./Squares.vue";
import {Lab, Subject} from "../../backend/types/Subject";
const props = defineProps({
  path: String,
})
const labs = ref<Array<Lab>>([])
const isLabs = ref(true)
let subject = ref(new Subject());
const submit = inject('submit')
function getLabData(url: string) {
  return new Promise((resolve, reject) => {
    fetch(new URL(url))
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
  });
}

onMounted(() => {
  fetch(`http://localhost:3000/database/${props.path}/${props.path}_subject`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log(response)
        }
      })
      .then((data) => {
        subject.value = data;
        // console.log(data)
        if (subject.value.Labs.length > 0) {
          isLabs.value = true
          for (let lab of subject.value.Labs) {
                getLabData(
                    `http://localhost:3000/database/${props.path}/${props.path}_lab_${lab}`)
                    .then((data: unknown) => {
                      // console.log(data); // Вывести полученные данные
                      labs.value.push(data)
                    })
                    .catch((error) => {
                      console.error(error); // Обработать ошибку, если возникла
                    })
          }
        }
        else {
          isLabs.value = false
        }
      })
      .catch((error) => console.log(error))

})
watch(() => submit.value.data, (newValue) => {
  if (newValue.Subject === subject.value.Title) {
    console.log("newValue", newValue)
    getLabData(
        `http://localhost:3000/database/${props.path}/${props.path}_lab_${newValue.FileName}`)
        .then((data) => {
          console.log(data); // Вывести полученные данные
          for (let lab of labs.value) {
            if (lab.FileName === newValue.FileName) {
              lab = Object.assign(lab, newValue)
            }
          }
        })
        .catch((error) => {
          console.error(error); // Обработать ошибку, если возникла
        })
  }

});

</script>

<style scoped lang="scss">
@import "../css/colors.scss";

.to-do-list {
  background-color: $color-primary-light-1;
  border-radius: 10px;
  height: 100%;
}

.to-do-list__list {
  border-radius: 10px;
  overflow: auto;
  width: 90%;
  margin: 0 auto;
}

.to-do-list__list::-webkit-scrollbar {
  width: 0;
}

.to-do-list__title {
  margin: 20px 20px 10px;
  font-size: 1.5em;
}


</style>
