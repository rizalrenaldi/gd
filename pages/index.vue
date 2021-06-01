<template>
 <div>
   <HeroHeader/>
    <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 overflow-hidden pt-6 md:pt-12 lg:pt-20 pb-1/2 relative">
      <img :src="require(`~/assets/images/map.svg`)" alt="map-bg" class="map-bg">
      <!-- <div class="w-full h-full bg-gradient-to-b from-white to-transparent absolute inset-0 opacity-60"></div> -->
       <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-4 md:col-span-6 lg:col-start-6 h-full py-16 relative z-10 md:pr-8 lg:pr-0">
          <h2 data-aos="fade-up" data-aos-duration="1200" class="font-serif text-3xl mb-4 text-brand">Gerard Daniels specialise in Executive Search and Board Consulting throughout Asia Pacific, Europe, Middle East & Africa and The Americas</h2>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50" class="font-sans leading-relaxed">Delivering up-to-date market insight with access to unique perspectives, Gerard Daniels offers a refreshingly collaborative, reliable and personal service to clients.  We are values-based, energetic and highly creative, able to take a perspective on new possibilities and ideas.</p>
       </div>
       <div class="px-6 md:px-0 col-start-1 md:col-start-2 lg:col-start-3 col-span-4 relative z-10 h-full flex flex-col justify-between pb-16">
         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50" class="flex items-center"><p class="w-32">Founded in</p> <span class="font-serif text-5xl ml-4 mb-4 text-brand">1986</span></div>
         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="60" class="flex items-center"><p class="w-32">Placements</p> <span class="font-serif text-5xl ml-4 mb-4 text-brand">30,123</span></div>
         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="70" class="flex items-center"><p class="w-32">Regions</p> <span class="font-serif text-5xl ml-4 mb-4 text-brand">4</span></div>
         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="80" class="flex items-center"><p class="w-32">Client served</p> <span class="font-serif text-5xl ml-4 mb-4 text-brand">4,432</span></div>
       </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1200" class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 service-section relative z-20">
      <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-2 md:col-span-7 lg:col-start-3 mb-8 md:pr-8 lg:pr-0">
          <h3 class="font-sans tracking-widest uppercase text-brand">Our Service</h3>
          <p class="my-4 text-2xl font-serif-light leading-relaxed">Our specialist consultants combine a comprehensive understanding of their sectors with a proven record in senior level executive search and consulting to boards of leading and emerging companies.</p>
      </div>

      </div>
    <TheSlider/>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-offset="300" class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-2 md:col-span-6 lg:col-start-3 my-32">
          <h2 class="font-serif text-4xl mb-4 text-brand">"Although we had always operated internationally out of Perth, in the early 2000s it became clear that there was opportunity beyond the Asia Pacific region"</h2>
          <p class="font-sans text-gd-neutral-light">Michael and Lloyd, Founders & Directors</p>
        </div>
      </div>

      <div id="posts" class="post-section relative flex flex-col justify-between mb-24">
          <img :src="require(`~/assets/images/featured-post.jpg`)" alt="service" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center">
            <div class="h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
              <div class="px-6 col-start-1 lg:col-start-3 col-span-4 relative h-full flex flex-col justify-between py-16">
                <p class="uppercase tracking-widest text-brand">Featured Posts</p>
                <div class="relative z-10">
                  <h2 class="font-serif-light text-3xl mb-2 text-white">Improving leadership health and wellbeing</h2>
                  <NuxtLink to="/" class="transition duration-200 group select-none font-sans text-lg whitespace-nowrap flex items-center opacity-70 hover:opacity-100 text-brand">Read more
                          <svg class="transition duration-200 transform group-hover:translate-x-1 mt-1 ml-2 w-1.5" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.818181 15.8644L0.106719 15.1774C-0.0355731 14.9966 -0.0355731 14.7073 0.106719 14.5627L6.54545 8.01808L0.106722 1.43729C-0.0355708 1.29266 -0.0355707 1.00339 0.106722 0.822599L0.818184 0.135593C0.99605 -0.0451978 1.24506 -0.0451977 1.42293 0.135593L8.89328 7.69266C9.03557 7.87345 9.03557 8.12656 8.89328 8.30735L1.42292 15.8644C1.24506 16.0452 0.996047 16.0452 0.818181 15.8644Z" fill="currentColor"/>
                          </svg>
                      </NuxtLink>
                </div>
              </div>
            </div>
      </div>
       <ThePostSlider/>
    <TheCTA/>
 </div>
</template>

<script>

  export default {
    
  }
</script>

<style>
.post-section {
  height: 470px;
}
.service-section {
  margin-top: -42%;
}
.map-bg {
    width: 100%;
    left: 50%;
    top: 35%;
    transform: translateX(-50%) scale(1.5);
    transform-origin: center center;
    @apply absolute opacity-100;
}

@screen sm {
    .map-bg {
      top: 30%;
  }
}
@screen md {
    .map-bg {
      top: 5%;
  }
}

@screen lg {
    .map-bg {
      @apply w-full absolute bottom-8 left-0 right-0 transform opacity-80 translate-x-0 scale-100;
  }
}

@screen xl {
    .map-bg {
      top: 5%;
      left: 50%;
      transform: translateX(-50%) scale(0.9);
    transform-origin: center center;
    @apply absolute opacity-75;
  }
}
</style>