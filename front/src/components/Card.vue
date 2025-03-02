<script setup>
  import { defineProps } from "vue";
  const {
  product_title, 
  product_id,
  product_img,
  product_type,
  product_price,
  product_currency
  } = defineProps({
    product_title: String,
    product_id: Number,
    product_img: String,
    product_type: Number,
    product_price: Number,
    product_currency: String
  });

</script>
<template>
  <div id={product_id}>
    <p>{product_title}</p>
    <img src={product_img}>
    <p>{product_price}</p>
    <p>{product_currency}</p>
    <p>{product_type}</p>
  </div>
</template>
