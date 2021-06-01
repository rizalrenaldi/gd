<template>
  <div class="w-screen relative">
      <div class="w-screen header-hero flex items-center justify-start relative overflow-hidden">
          <!-- <VImg src="header.png" alt="header" class="absolute absolute-center-x z-0 w-full h-full object-cover object-center"/> -->

           <client-only>
                <vue-tiny-slider v-bind="tinySliderOptions" id="hero" class="w-screen header-hero flex items-start">

<div class="w-screen header-hero relative">
    <div class="w-screen h-full group relative flex items-end overflow-hiddens drag-none">
        <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
            <div class="pr-8 col-start-3 col-span-full md:col-start-4 md:col-span-5 lg:col-start-6 h-full pt-1/6 relative z-10 text-white">
                <h2 class="font-serif-light text-4xl md:text-7xl mb-2">Inspires leadership excellence</h2>
                <p class="text-base md:text-lg">Gerard Daniels searches for executive game breakers whilst keeping an eye on emerging leaders.</p>
                <NuxtLink to="/" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-center">
                    Discover how
                    <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
         <VImg src="header.png" alt="header" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center" />
        <div class="w-full h-full bg-black bg-opacity-25 absolute inset-0 z-0"></div>
    </div>
</div>
<div class="w-screen header-hero relative">
    <div class="w-full h-full relative flex items-end overflow-hiddens drag-none">
         <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
            <div class="pr-8 col-start-3 col-span-full md:col-start-4 md:col-span-5 lg:col-start-6 h-full pt-1/6 relative z-10 text-white">
                <h2 class="font-serif-light text-4xl md:text-7xl mb-2">Inspires leadership excellence</h2>
                <p class="text-base md:text-lg">Gerard Daniels searches for executive game breakers whilst keeping an eye on emerging leaders.</p>
                <NuxtLink to="/" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-center">
                    Discover how
                    <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <VImg src="post1.jpg" alt="header" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center" />
        <div class="w-full h-full bg-black bg-opacity-40 absolute inset-0 z-0"></div>
    </div>
</div>
<div class="w-screen header-hero relative">
    <div class="w-full h-full relative flex items-end overflow-hiddens drag-none">
         <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
            <div class="pr-8 col-start-2 col-span-full md:col-start-2 md:col-span-5 lg:col-start-3 h-full pt-1/6 relative z-10 text-white">
                <h2 class="font-serif-light text-4xl md:text-7xl mb-2">Inspires leadership excellence</h2>
                <p class="text-base md:text-lg">Gerard Daniels searches for executive game breakers whilst keeping an eye on emerging leaders.</p>
                <NuxtLink to="/" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-center">
                    Discover how
                    <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <VImg src="featured-post.jpg" alt="header" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center" />
        <div class="w-full h-full bg-black bg-opacity-25 absolute inset-0 z-0"></div>
    </div>
</div>
                        <!-- <div class="w-full header-hero group drag-none flex items-center justify-center relative">
                          <div class="w-full h-full absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                            <div class="w-full h-full absolute inset-0 z-10">
                               <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
                                    <div class="pr-8 col-start-3 col-span-full md:col-start-4 md:col-span-5 lg:col-start-6 h-full pt-1/6 relative z-10 text-white">
                                        <h2 class="font-serif-light text-4xl md:text-7xl mb-2">Inspires leadership excellence</h2>
                                        <p class="text-base md:text-lg">Gerard Daniels searches for executive game breakers whilst keeping an eye on emerging leaders.</p>
                                        <NuxtLink to="/" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-center">
                                            Discover how
                                            <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                                            </svg>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <VImg src="header.png" alt="header" class="object-cover object-center w-full h-full select-none drag-none"/>
                        </div> -->

                      

                        
                  

                   
              
                    
                    
                </vue-tiny-slider>
            </client-only>

          <!-- <div class="w-full h-full absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-60"></div> -->
        <Swirl/>

        
      </div>
                <div class="absolute z-50 -bottom-4 right-0 w-full">
                      <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
                      <div id="hero-controls" class="hero-controls col-start-6 px-8 md:col-start-8 lg:col-start-11 flex items-center justify-end">
                        <div><BtnArrowLeft/></div>
                        <div><BtnArrowRight/></div>

                      </div>
                    </div>
                </div>
      <!-- <div class="absolute z-30 -bottom-4 right-0 w-full">
        <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
            <div class="col-start-6 px-8 md:col-start-8 lg:col-start-11 flex items-center justify-end">
                <BtnArrowLeft/>
                <BtnArrowRight/>
            </div>
        </div>
      </div> -->
  </div>
</template>

<script>

  export default {
    data() {
        return {
            tinySliderOptions: {
                "container": "#hero",
                "controlsContainer": "#hero-controls",
                "items": 1,
                "mouseDrag": true,
                "nav": false,
                "autoplay": true,
                "autoplayTimeout": 6000,
                "speed": 800,
                "autoplayButtonOutput": false
            }
        }
    },
  }
</script>

<style>
/* #hero-iw { width: 100%;} */
</style>