<template>
  <div
      :class="{
            'radio_default': true,
            'radio_overdue': props.isRadio === props.Type && props.Type === 'overdue',
            'radio_not_done': props.isRadio === props.Type &&props.Type === 'not done',
            'radio_process':props.isRadio === props.Type && props.Type=== 'process',
            'radio_done': props.isRadio === props.Type &&props.Type === 'done',
            'radio_accepted':props.isRadio === props.Type && props.Type === 'accepted',
          }"></div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  Type: String,
  isRadio: String,
})
</script>

<style scoped lang="scss">
@import "../css/colors.scss";

.radio_default {
  background-color: $color-lab-default;
}
.radio_overdue {
  background-color: $color-lab-overdue;
}
.radio_process {
  background-color: $color-lab-process;
}
.radio_not_done {
  background-color: $color-lab-not-done;
}
.radio_done {
  background-color: $color-lab-done;
}
.radio_accepted {
  background-color: $color-lab-accepted;
}

</style>
