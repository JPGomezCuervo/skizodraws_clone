<script setup>
  import NavBar from "@/components/NavBar.vue";
import { provide, ref, onMounted} from "vue";
import { state } from "@/state.js";

provide("state", state);

onMounted(async() => {
    try {
      let res = await fetch("http://localhost:3000/collections/all");
      state.products = await res.json();
      res = await fetch("http://localhost:3000/collections/products/types");
      state.product_types = await res.json();
    } catch(error) {
      console.error("There was an error ", error);
    }
});

</script>
<template>
  <NavBar/>
  <main class="bg-skizo-bg">
    <RouterView/>
  </main>
</template>
