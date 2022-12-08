<template>
  <div class="flex flex-col px-12 py-20 bg-slate-500">
    <section id="one">
      <header>
        <h2 class="text-3xl">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h2>
        <p class="my-12">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      </header>
    </section>

    <section 
      id="two"
      class="pt-12 border-t"
    >
      <h2 class="text-lg mb-4"><strong>Recent Work</strong></h2>
      <div class="grid grid-cols-2 gap-8 mb-8">
        <div v-for="item in workItems" :key="item.title">
          <WorksCard 
            :item="item"
          />
        </div>
      </div>

      <a href="#" class="h-8 w-20 p-2 border-2 rounded-lg">Check out my Github!</a>
    </section>
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

