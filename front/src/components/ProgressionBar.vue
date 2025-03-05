<script setup>
import { ref, computed, watch, nextTick } from "vue";

const props = defineProps({
  id: Number,
  ms: Number,
  width: Number,
  height: Number,
  primary: String,
  secondary: String,
  current_index: Number
});

const frame = ref(null);
const bar = ref(null);
const should_run = computed(() => {
  console.log(`bar ${props.id}: ${props.id === props.current_index}`);
  return props.id === props.current_index;
});

const frameStyles = computed(() => ({
  width: `${props.width * 10}px`,
  height: `${props.height * 10}px`,
  backgroundColor: props.secondary,
  position: "relative",
}));

const childStyles = computed(() => ({
  width: `${props.width * 10}px`,
  height: `${props.height * 10}px`,
  backgroundColor: props.primary,
  position: "absolute",
}));

function loading() {
  nextTick(() => {
  const width = frame.value.offsetWidth;
  const animation = bar.value.animate([
    {width: "0"},
    {width: `${props.width * 10}px`},
  ], {duration: 1000});
  });
}

watch(() => props.current_index, (n) => {
  console.log(`bar ${props.current_index}`);
  console.log(`bar ${n}`);
  if (props.id === n) {
    loading();
  }
});


</script>

<template>
  <div>
    <div ref="frame" :style="frameStyles">
      <div ref="bar":style="childStyles"></div>
    </div>
    <button @click="loading">animate!</button>
  </div>
</template>
