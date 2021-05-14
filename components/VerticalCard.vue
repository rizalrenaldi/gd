<template>
  <div class="w-full my-16 flex flex-row md:flex-col p-8 shadow-xl rounded-2xl">
      <NuxtLink :to="url">
        <div class="w-full h-56 overflow-hidden my-4 rounded-xl">
            <img v-if="image" :src="image" class="object-cover w-full" alt="">
        </div>
        <p class="text-gray-500 pt-4 uppercase tracking-wider font-semibold text-sm">{{category}}</p>
        <h2 class="text-gray-700 text-4xl font-bold tracking-tighter my-4">{{title}}</h2>
        <p class="text-gray-600 leading-relaxed tracking-tight">{{excerpt}}</p>
        <Button>
            <template #button-text>
                Learn More
            </template>
        </Button>
      </NuxtLink>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        url: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: true
        }

    }
}
</script>

<style>

</style>