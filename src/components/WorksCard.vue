<template>
  <div>
    <a :href="item.href"
      class="rounded-md"
    >
      <img :src="item.image" alt="" 
      class="bg-gray-200 h-40 w-full rounded-lg"/>
    </a>
    <div class="mt-2">
      <div>{{ item.title }}</div>
      <p class="text-sm">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
</script>


