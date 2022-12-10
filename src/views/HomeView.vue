<template>
  <div class="grid lg:grid-cols-7">
    <img 
      src="@/assets/bg-main.jpg"
      alt=""
      ref="background"
      class="fixed top-0 lg:right-24 min-h-full min-w-[1024px] w-full h-auto"
    >
    <div class="lg:col-span-2 relative lg:sticky top-0 lg:left-0
                flex flex-col justify-between lg:items-end
                lg:h-screen p-12 lg:pt-20">
      <Header class="" />
      <Footer class="hidden lg:block"/>
    </div>
    <Main class="relative lg:col-start-3 lg:col-span-5"/>
    <Footer class="relative lg:hidden my-12" />
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

