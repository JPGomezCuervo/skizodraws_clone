<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
const props = defineProps({
  categories: Array,
});

const emits = defineEmits(["click"]);
const nav_pos = ref(null);
const opts_container = ref(null);
const active_button = ref(null);
const duration = "duration-500";
const animation = "ease-in-out";
let is_running = false;

onMounted(() => {
  window.addEventListener("resize", handle_resize);
  active_button.value = opts_container.value.querySelector("button");
  nextTick(update_nav_pos);
});

onUnmounted(() => {
  window.removeEventListener("resize", handle_resize);
});

function handle_resize() {
  if (is_running) return;

  is_running = true;
  requestAnimationFrame(() => {
    update_nav_pos();
    is_running = false;
  });
}

function update_nav_pos() {
  const domrect = active_button.value.getBoundingClientRect();
  nav_pos.value.style.width = `${active_button.value.offsetWidth}px`;
  nav_pos.value.style.left = `${domrect.x}px`;
}

function handle_click(event) {
  active_button.value = event.currentTarget;
  nav_pos.value.classList.add(duration);
  nav_pos.value.classList.add(animation);
  nav_pos.value.addEventListener("transitionend", transitionend);

  nextTick(update_nav_pos());
  emits("click", event);
}

function transitionend() {
  nav_pos.value.classList.remove(animation);
  nav_pos.value.classList.remove(duration);
  nav_pos.value.removeEventListener("transitionend",transitionend);
}

</script>
<template>
  <div>
    <div ref="opts_container" class="flex justify-center gap-15">
      <button :id="index" @click="handle_click" v-for="(category, index) in props.categories" class="cursor-pointer">{{category}}</button>
    </div>
    <span ref="nav_pos" class="absolute block h-[2px]  bg-skizo-black"></span>
  </div>
</template>
