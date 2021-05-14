<template>
  <div class="container mx-auto px-6 py-12">
   <div class="flex flex-col md:flex-row">
        <p>Gerard Daniels</p>
   </div>
  </div>
</template>

<script>
export default {
    computed: {
        printYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>