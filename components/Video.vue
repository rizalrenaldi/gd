<template>
  <div class="overflow-hidden rounded-2xl w-1/2">
        <vue-plyr>
          <div data-plyr-provider="youtube" :data-plyr-embed-id="videoId"></div>
        </vue-plyr>
      </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {
            videoId: ""
        }
    }
}
</script>

<style>

</style>