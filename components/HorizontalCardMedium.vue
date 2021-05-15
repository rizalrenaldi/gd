<template>
  <div class="w-full flex flex-row md:flex-col border-l-2 border-neutral-50 dark:border-gd-neutral-dark">
      <NuxtLink :to="url" class="w-full post-block group transition duration-200 px-8 md:px-16 py-12 hover:bg-neutral-50 dark:hover:bg-neutral-dark-800 relative flex flex-col justify-center">
        <!-- <div v-if="image" class="w-full overflow-hidden my-2 rounded-xl">
            <img :src="image" class="object-cover w-full" alt="">
        </div> -->
        <div class="transition duration-200 w-2 h-2 bg-neutral-100 dark:bg-neutral-dark-700 group-hover:bg-brand rounded-full absolute dot"></div>
        <div class="post-border w-0.5 h-40 bg-transparent group-hover:bg-brand absolute top-0 left-0"></div>
        <div class="flex justify-between">
        <p class="text-neutral-600 dark:text-gd-neutral-dark-500 uppercase text-xs">{{date}}</p>
            <p class="text-neutral-600 dark:text-gd-neutral-dark-500 uppercase text-xs">{{category}}</p>
        </div>
        <h2 class="text-neutral-800 dark:text-gd-neutral-dark-50 text-3xl font-bold my-1">{{title}}</h2>
        <p class="text-neutral-700 dark:text-gd-neutral-dark-400 leading-relaxed tracking-tight">{{excerpt}}</p>

        <svg class="text-neutral-600 absolute bottom-6 right-4 opacity-0 h-3 mr-8 md:mr-16 transition-all duration-300 group-hover:opacity-100 group-hover:right-0" width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.25 7H0.75M33.25 7L26.75 1M33.25 7L26.75 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

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
        date: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
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