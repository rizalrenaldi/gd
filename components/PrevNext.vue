<template>
  <div class="mt-16 nextprev flex items-center justify-center">
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class="group transition duration-200 w-1/2 bg-neutral-50 dark:bg-neutral-dark-700 dark:text-gd-neutral-dark-100 hover:text-white h-80 flex items-center justify-end relative overflow-hidden">
    <div class="w-full h-full absolute z-0 inset-0 bg-brand transform transition duration-200 translate-x-full group-hover:translate-x-0"></div>
      <div class="w-full max-w-lg p-10 relative z-10">
        <p class="font-normal text-neutral-600 dark:text-gd-neutral-dark-400 dark:group-hover:text-gd-neutral-dark-100">Previous</p>
         <p class="text-2xl font-bold tracking-tight">{{ prev.title }}</p>
      </div>
    </NuxtLink>

    <div v-else class="group transition duration-200 w-1/2 bg-neutral-50 dark:bg-neutral-dark-700 h-80 flex items-center justify-end relative overflow-hidden">
      <div class="w-full max-w-lg p-10 relative z-10">
         <p class="text-2xl font-bold tracking-tight">...</p>
      </div>
    </div>

    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }" class="group transition duration-200 w-1/2 bg-neutral-50 dark:bg-neutral-dark-700 dark:text-gd-neutral-dark-100 hover:text-white h-80 flex items-center justify-start relative overflow-hidden">
      <div class="w-full h-full absolute z-0 inset-0 bg-brand transform transition duration-200 -translate-x-full group-hover:translate-x-0"></div>
      <div class="w-full max-w-lg p-10 text-right relative z-10">
         <p class="font-normal text-neutral-600 dark:text-gd-neutral-dark-400 dark:group-hover:text-gd-neutral-dark-100">Next</p>
         <p class="text-2xl font-bold tracking-tight">{{ next.title }}</p>
      </div>
    </NuxtLink>

    <div v-else class="group transition duration-200 w-1/2 bg-neutral-50 dark:bg-neutral-dark-700 h-80 flex items-center justify-end relative overflow-hidden">
      <div class="w-full max-w-lg p-10 relative z-10">
         <p class="text-2xl font-bold tracking-tight">...</p>
      </div>
    </div>
      <!-- <div class="w-full max-w-5xl flex items-center">
    <div v-if="prev" class="w-1/2 h-full p-8 bg-neutral-50">
      <p class="font-normal text-neutral-600">Previous</p>
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      <p>{{ prev.title }}</p>
    </NuxtLink>
    </div>
    <span v-else class="w-1/2">&nbsp;</span>
    
    <div v-if="next" class="border-l w-1/2 p-8 text-right">
      <p class="font-normal text-neutral-600">Next</p>
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="text-right font-bold hover:underline"
    >
      <p>{{ next.title }}</p>
    </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
  </div> -->
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style>
.nextprev {
    width: 100%;
    min-height: 400px;
}
</style>