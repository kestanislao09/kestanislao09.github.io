<template>
  <div class="grid grid-cols-7">
    <div class="col-span-2 fixed top-0 left-0 flex flex-col justify-between h-screen p-12 pt-20">
      <Header class="" />
      <Footer class=""/>
    </div>
    <Main class="col-start-3 col-span-5"/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Footer from "@/components/Footer.vue"
</script>

