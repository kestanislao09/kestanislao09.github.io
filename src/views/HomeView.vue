<template>
  <div class="grid grid-cols-7">
    <img 
      src="@/assets/bg-main.jpg"
      alt=""
      ref="background"
      class="fixed top-0 left-0 min-h-full min-w-[1024px] w-full h-auto"
    >
    <div class="col-span-2 sticky top-0 left-0 flex flex-col justify-between items-end h-screen p-12 pt-20">
      <Header class="" />
      <Footer class=""/>
    </div>
    <Main class="col-start-3 col-span-5 relative"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Footer from "@/components/Footer.vue"

const background = ref(null)

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})

const handleScroll = (evt) => {
  const scrollY = window.scrollY


  const maxBackgroundSize = 140
  const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

  background.value.style.transform =
    'scale(' + (100 + backgroundSize) / 100 + ')'
}
</script>

