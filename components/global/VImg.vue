<template>
  <img 
    ref="imageref"
    :src="imgSrc()" 
    :alt="alt" 
    :class="imgIsLoaded ? `show ${imgStyle}` : ''"  
    loading="lazy" 
    @load="imgLoadedMethod"
  />
</template>

<script>
export default {
  data() {
    return {
      imgIsLoaded: false
    }
  },
  props: {
    imgStyle: String,
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  },
  methods: {
    imgLoadedMethod () {
      this.imgIsLoaded = true
    },
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`);
      } catch (error) {
        return null
      }
    }
  }
}
</script>
<style scoped>
img {
  opacity: 0;
  @apply transition-opacity duration-1000;
}

img.show {
  opacity: 1;
}
</style>