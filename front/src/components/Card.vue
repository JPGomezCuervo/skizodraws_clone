<script setup>
  import { defineProps } from "vue";
  const props = defineProps({
    product_title: String,
    product_id: Number,
    product_img: String,
    product_type_id: Number,
    product_price: Number,
    product_currency: String,
  });

</script>
<template>
  <div :id="props.product_id" :product_type="props.product_type_id" class="text-center m-auto mb-10">
    <img class="w-65 mb-4":src="props.product_img">
    <p class="text-sm w-60 mb-4">{{props.product_title}}</p>
    <div class="flex justify-center text-xs">
      <p>${{ props.product_price }}&nbsp;{{ props.product_currency }}</p>
    </div>
  </div>
</template>
