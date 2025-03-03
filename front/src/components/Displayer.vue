<script setup>
  import { inject, watch } from "vue";
  import Card from "@/components/Card.vue";

  const state = inject("state");


  function get_product_type(arr_product_types, num_id) {
    let res;
    if (res = arr_product_types.find(el => el.product_type_id == num_id))
      return res.product_type_name;
    else
      return "Unknown";
  }

</script>

<template>
  <div class="grid grid-cols-5">
    <!--
      TODO: make currency variable
      -->
    <Card 
        v-for="product in state.products"
        :product_img="product.product_img_src"
        :product_title="product.product_title"
        :product_id="product.product_id"
        :product_type = "product.product_id"
        :product_price = "product.product_price"
        product_currency = "USD"
    />
  </div>
</template>
