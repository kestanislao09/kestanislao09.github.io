<template>
    <a :href="item.href"><img :src="item.image" alt="" /></a>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
</template>

<script setup>
const props = defineProps(['item'])
</script>


