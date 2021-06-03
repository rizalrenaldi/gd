<template>
  <div class="w-screen relative">
      <div class="w-screen header-hero flex items-center justify-start relative overflow-hidden">
          <!-- LEFT ALIGNMENT <VImg src="header.png" alt="header" class="absolute absolute-center-x z-0 w-full h-full object-cover object-center"/> -->

           <client-only>
                <vue-tiny-slider v-bind="tinySliderOptions" id="hero" class="w-screen header-hero flex items-start">

<div v-for="slider in content" :key="slider.id" class="w-screen header-hero relative overflow-hidden">
    <div class="w-screen h-full group relative flex items-end overflow-hiddens drag-none">
        <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
        <VImg v-if="slider.image" :src="slider.image" alt="header" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center" />
        <div v-if="slider.video" class="videoWrapper">
            <video loop autoplay muted playsinline>
                    <source :src="require(`~/assets/images/${slider.video}`)" type="video/mp4">
                </video>
        </div>
        <div class="w-full h-full bg-black bg-opacity-25 absolute inset-0 z-0"></div>
    <Swirl/>
            <div v-if="slider.contentAlign === 'left'" class="pr-8 col-start-2 col-span-full md:col-start-2 md:col-span-7 lg:col-start-3 lg:col-span-5 h-full relative z-10 text-white">
               <div class="h-full flex flex-col justify-center">
                    <h2 class="font-serif-light text-4xl md:text-6xl mb-2">{{slider.title}}</h2>
                    <p class="text-base md:text-lg">{{slider.description}}</p>
                     <NuxtLink :to="slider.link" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-start justify-center">
                        {{slider.button}}
                        <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                        </svg>
                    </NuxtLink>
               </div>
            </div>

            <div v-else class="pr-8 col-start-3 col-span-full md:col-start-4 md:col-span-5 lg:col-start-6 lg:col-span-5 h-full relative z-10 text-white overflow-hidden">
               
               <div class="h-full flex flex-col items-start justify-center pr-4 relative z-10">
                    <h2 class="font-serif-light text-4xl md:text-6xl mb-2">{{slider.title}}</h2>
                    <p class="text-base md:text-lg">{{slider.description}}</p>
                    <NuxtLink :to="slider.link" class="mt-6 px-4 py-3 bg-brand text-white rounded-md inline-flex items-start justify-center">
                        {{slider.button}}
                        <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                        </svg>
                    </NuxtLink>
               </div>
            </div>

        </div>
       
    </div>
</div>
        
                    
                </vue-tiny-slider>
            </client-only>

          <!-- <div class="w-full h-full absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-60"></div> -->
        

        
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
            content: [
                {
                    "title": "Inspiring leadership excellence",
                    "description": "Gerard Daniels searches for executive game breakers whilst keeping an eye on emerging leaders.",
                    "button": "Learn more",
                    "link": "/",
                    "image": "hero-image1.jpg",
                    "contentAlign": "right"

                },
                {
                    "title": "Celebrating a significant milestone of 35 years",
                    "description": "Reflecting on our journey so far, and to consider what it takes to grow and meet the evolving demands of a highly competitive industry.",
                    "button": "Our story",
                    "link": "/",
                    "video": "video.mp4",
                    "contentAlign": "right"

                },
                {
                    "title": "Helping to smooth the transition into new executive roles",
                    "description": "Gerard Daniels, sees great value in supporting and connecting regularly with hiring managers and placed candidates throughout the all-important first year on the job (and beyond).",
                    "button": "Read more",
                    "link": "/",
                    "image": "hero-image3.jpg",
                    "contentAlign": "right"

                }
            ],
            tinySliderOptions: {
                "container": "#hero",
                "controlsContainer": "#hero-controls",
                "items": 1,
                "mouseDrag": true,
                "nav": false,
                "autoplay": false,
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

/* video {
    width: 100%;
    max-height: 100%;
    box-sizing: border-box;
} */
.videoWrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;  
    z-index:0;
}

.videoWrapper video {
  left: 50%;
  min-height: 100%;
  min-width: 150vh;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

}

@screen lg {
    .videoWrapper video {
  min-width: 100vh!important;

    }
}
</style>