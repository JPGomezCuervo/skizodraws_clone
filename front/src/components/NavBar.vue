<script setup>
  import SearchIcon from "@/components/SearchIcon.vue"
  import UserIcon from "@/components/UserIcon.vue"
  import CartIcon from "@/components/CartIcon.vue"
</script>
<template>
  <nav class="flex items-center px-43 h-17 bg-skizo-black text-white text-sm">
    <span class="px-5 ">
      <img class="h-7.5 "src ="https://skizodraws.com/cdn/shop/files/Smaller_web_logo.gif?v=1698875455&width=120">
    </span>
    <div class="m-auto space-x-7">
      <a>Home</a>
      <a>Shop</a>
      <a>Wallpaper Pack</a>
      <a>About</a>
    </div>
    <div class="flex space-x-7">
      <SearchIcon class="h-5 w-5"/>
      <UserIcon class="h-5 w-5"/>
      <CartIcon class="h-5 w-5"/>
    </div>
  </nav>
</template>
