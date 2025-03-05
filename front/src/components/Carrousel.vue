<script setup>
import { ref, onMounted, nextTick, onUpdated, computed } from "vue";
import ProgressionBar from "@/components/ProgressionBar.vue";
const props = defineProps({
  images: Array
});

const frame = ref(null);
const current = ref(null);
const images = ref([]);
// TODO: CHECK AND SOLVE
const current_index = computed(() =>images.value[images.value.length-1].id);



onMounted(() => {
  nextTick(() => {
    for (const [index, image] of props.images.entries()) {
      images.value.push({ id: index, image });
    }
  });
});
onUpdated(() => current.value = frame.value.lastElementChild);

function next() {
  const animation = current.value.animate([
    {transform: "translateX(0px)"},
    {transform: "translateX(-3000px)"},
  ], {duration: 1000, easing:"ease-in-out"});

  animation.onfinish = () => {
    const el = images.value.pop();
    images.value.unshift(el);
  }
}

</script>
<template>
  <div>
    <div ref="frame" class="relative w-full h-screen">
      <img :src="image.image" v-for="image in images" class="absolute z-2 w-full"/>
    </div>
    <ProgressionBar v-for="image in images" :id="image.id" :ms="1000" :width="10" :height="3" :current_index="current_index" primary="yellow" secondary="grey"/>
    <button @click="next" class="size-10 mt-20"> next </button>
  </div>
</template>
