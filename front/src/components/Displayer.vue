<script setup>
  import { onMounted, ref } from "vue"
  const data = ref({});


  onMounted(async () => { 
    try {
      console.log("I just run");
      const res = await fetch("http://localhost:3000/collections/all");
      data.value = await res.json();
      console.log(data.value);
    } catch(error) {
      console.log("There was an error ", error);
    }
  });

</script>
<template></template>
