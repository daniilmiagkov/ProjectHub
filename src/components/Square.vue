<template>
  <div
      :class="{
            'radio_default': true,
            'radio_overdue': props.isRadio === props.Type && (props.Type === 'overdue' || props.Type === 'skipped'),
            'radio_not_done': props.isRadio === props.Type && (props.Type === 'not done' || props.Type === 'await'),
            'radio_process':props.isRadio === props.Type && (props.Type=== 'process' || props.Type=== 'disease'),
            'radio_done': props.isRadio === props.Type && (props.Type === 'done' || props.Type=== 'cancelled'),
            'radio_accepted':props.isRadio === props.Type && (props.Type === 'accepted' || props.Type === 'visited'),
          }">
<!--    <img
      :class="{
            'square__add': props.Add,
            'hide': !props.Add,
      }"
          src="/img/Asset 10.svg"/>-->

    <svg :class="{ 'square__add': props.Add, 'hide': !props.Add }" viewBox="0 0 240 240">
      <g id="Layer_1-2" data-name="Layer 1">
        <line class="cls-1" x1="120" y1="20" x2="120" y2="220"/>
        <line class="cls-1" x1="220" y1="120" x2="20" y2="120"/>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from "vue";

const props = defineProps({
  Type: String,
  isRadio: String,
  Add: Boolean
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

.square__add {
height: 50%;
  width: 50%;
  fill: none;
  stroke: $color-primary;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 40px;
}

.hide {
  display: none;
}
</style>
