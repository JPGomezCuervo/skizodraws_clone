<script setup>
import { ref, onMounted } from "vue";
import Displayer from "@/components/Displayer.vue";
import CategoryTabs from "@/components/CategoryTabs.vue";

const props = defineProps({
  subtitle: String,
  title: String,
  categories: Array,
});

function handle_click(event) {
  console.log(`was clicked: ${props.categories[event.currentTarget.id]}`);
}
</script>
<template>
  <section class="text-center text-sm px-45 pt-10">
    <p class="mb-6">{{subtitle}}</p>
    <h2 class="text-center text-4xl text-extrabold mb-10">{{title}}</h2>
      <CategoryTabs @click="handle_click" :categories="props.categories" class="mb-6"/>
    <Displayer/>
  </section>
</template>
