<template>
    <div class="px-12 py-20 bg-black/60 text-gray-200">
      <div class="flex flex-col max-w-xl mx-auto">
        <section id="one">
          <header>
            <h2 class="text-3xl">I am a front-end web developer residing in Los Angeles, California.</h2>
            <p class="my-12">I got my feet wet with coding as an intern for a small business-solutions company back in 2014, took a break to finish school for respiratory therapy, then revisited coding after a conversation with some co-workers about it in 2021. Since then, I have been learning javascript through <a href="">The Odin Project</a> and now have experience working with Vue and React to create responsive UI/UX.</p>
          </header>
        </section>

        <section 
          id="two"
          class="pt-12 border-t"
        >
          <h2 class="text-center sm:text-left text-xl mb-4"><strong>Recent Work</strong></h2>
          <div class="grid grid-cols-2 gap-8 mb-8">
            <div v-for="item in workItems" :key="item.title" class="col-span-2 sm:col-span-1 max-w-xs mx-auto">
              <WorksCard 
                :item="item"
              />
            </div>
          </div>

          <a href="https://github.com/kestanislao09" class="h-8 w-20 p-2 border-2 rounded-lg"><button>Check out my Github!</button></a>
        </section>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import WorksCard from "@/components/WorksCard.vue"

const workItems = ref([
  {
    title: 'Work 1',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '#',
    href: '#',
  },
  {
    title: 'Work 2',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '#',
    href: '#',
  },
  {
    title: 'Work 3',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '#',
    href: '#',
  },
  {
    title: 'Work 4',
    description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '#',
    href: '#',
  }
])
</script>

