<template>
  <div class="overflow-hidden pt-24">
  
  <div v-if="post.postType === 'cover'" class="max-w-5xl mx-auto flex">
    <div class="w-1/2 p-8">
      <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-dark-400">&larr; Back</NuxtLink>
      <h1 class="font-bold text-5xl mt-6 text-neutral-800 dark:text-neutral-dark-50">{{ post.title }}</h1>
      <div class="flex justify-between mt-3 text-xs text-neutral-600 dark:text-neutral-dark-400">
        <p class="uppercase py-2">{{formatDate(post.createdAt)}}</p>
        <p class="uppercase py-2">{{post.category}}</p>
        <div class="flex items-center">
          <div class="w-10 h-px bg-neutral-300 dark:bg-neutral-dark-500"></div>
          <p class="ml-2">{{getMinute(post.readingTime)}}</p>
          <!-- <p v-for="tag in post.tags" :key="tag.id" class="uppercase leading-relaxed">{{tag}}</p> -->
        </div>
      </div>
    </div>
    <div class="w-1/2 p-8">
        <VImg class="w-full" :src="post.cover" alt="placeholder" />
    </div>
  </div>

  <div v-else class="max-w-5xl mx-auto px-4 relative">
    <div class="w-2 h-2 bg-brand rounded-full absolute top-0 right-4"></div>
    <div class="max-w-xl">
    <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-dark-400">&larr; Back</NuxtLink>
    <h1 class="font-bold text-5xl md:text-6xl mt-6 text-neutral-800 dark:text-neutral-dark-50">{{ post.title }}</h1>
    <div class="flex justify-between mt-3 text-xs text-neutral-600">
      <p class="uppercase py-2">{{formatDate(post.createdAt)}}</p>
      <p class="uppercase py-2">{{post.category}}</p>
      <div class="flex items-center">
        <div class="w-10 h-px bg-neutral-300 dark:bg-neutral-dark-500"></div>
        <p class="ml-2">{{getMinute(post.readingTime)}}</p>
        <!-- <p v-for="tag in post.tags" :key="tag.id" class="uppercase leading-relaxed">{{tag}}</p> -->
      </div>
    </div>
  </div>
  </div>

    <div class="max-w-2xl mx-auto px-4 text-neutral-800 dark:text-neutral-dark-50">
  <article class="prose prose-lg dark:prose-dark mx-auto mt-16 dark:text-neutral-dark-200">

      <nuxt-content :document="post" />

  </article>
    <div class="flex my-16">
      <div class="w-1.5 h-1.5 bg-neutral-100 dark:bg-neutral-dark-500 rounded-full"></div>
      <div class="w-1.5 h-1.5 bg-neutral-100 dark:bg-neutral-dark-500 rounded-full mx-2"></div>
      <div class="w-1.5 h-1.5 bg-neutral-100 dark:bg-neutral-dark-500 rounded-full"></div>
    </div>
     <div class="flex">
       <NuxtLink to="/" v-for="tag in post.tags" :key="tag.id" class="text-sm no-underline px-2 py-1 bg-neutral-50 dark:bg-neutral-dark-700 hover:bg-neutral-100 dark:hover:bg-neutral-dark-600 text-neutral-700 dark:text-neutral-dark-400 rounded-lg mr-2">{{tag}}</NuxtLink>
     </div>

    </div>
     <PrevNext :prev="prev" :next="next" />
   </div>
</template>

<script>

  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

      const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { 
        post,
        prev,
        next 
      }
    },
    mounted () {
    },
    methods: {
      getMinute(time) {
        return Math.floor(time / 60 / 60)
      },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
    }
  }
</script>

<style>
.nuxt-content .nuxt-content-highlight .filename {
  @apply text-sm font-semibold text-neutral-700;
}
/* .nuxt-content {
  @apply break-words;
}

.nuxt-content .nuxt-content-highlight .filename {
    @apply block bg-neutral-700 text-neutral-100 text-sm tracking-tight py-2 px-4 -mb-3 rounded-t;
  }
.nuxt-content .nuxt-content-highlight .line-numbers[data-line*] {
    @apply block bg-neutral-700 text-neutral-100 text-sm tracking-tight py-2 px-4 -mb-3 rounded-t;
  } */


</style>