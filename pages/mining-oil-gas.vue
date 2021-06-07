<template>
<div>
    <div class="w-screen relative">
        <div class="w-screen header-hero flex items-center justify-start relative overflow-hidden">
        <div class="header-hero grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 relative z-20">
            <div class="videoWrapper">
                <video loop autoplay muted playsinline>
                    <source :src="require(`~/assets/images/energy-hero.mp4`)" type="video/mp4">
                </video>
            </div>
            <div class="w-full h-full bg-black bg-opacity-40 absolute inset-0 z-0"></div>
        <div class="pr-8 col-start-3 col-span-full md:col-start-4 md:col-span-5 lg:col-start-6 lg:col-span-5 h-full relative z-10 text-white overflow-hidden">
            
            <div class="h-full flex flex-col items-start justify-center pr-4 relative z-10">
                <p class="text-base md:text-lg tracking-widest text-brand uppercase">Sector expertise</p>
                <h2 class="font-serif-light text-4xl md:text-6xl mb-2">Supporting the Energy, Oil & Gas sector</h2>
            </div>
        </div>
            <Swirl/>
        </div>
        </div>
    </div>

    <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 overflow-hidden pt-6 md:pt-12 lg:pt-20 mb-16 relative">
         <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-4 md:col-span-6 lg:col-start-6 h-full py-16 relative z-10 md:pr-8 lg:pr-0">
          <h2 class="font-serif text-3xl mb-6 text-brand">Energy, oil and gas is one of the largest and most lucrative, but also most volatile sectors to work in. It is highly sensitive to political and environmental events, and both demand and prices can fluctuate significantly – without much warning at all.</h2>
          <p class="font-sans text-lg leading-relaxed mb-4">Gerard Daniels’ specialist team of energy consultants has the experience, industry acumen and global network to help this sector evolve and respond to many challenges.</p>
          <p class="font-sans text-lg leading-relaxed mb-4">Oil and gas had a particularly tumultuous time in 2020, with falling demand for oil, supply chain disruption, extreme workforce shortages and a sharp fall in global sector revenue. In 2021 growing industry regulation and the burden of finding new oil and gas reserves to secure future revenue will continue to challenge productivity and performance in the energy sector.</p>
       </div>
    </div>

    <!-- <div class="w-full min-h-separator bg-black">s</div> -->
    <div id="posts" class="min-h-separator relative flex flex-col justify-between mb-8">
          <img :src="require(`~/assets/images/separator.jpg`)" alt="service" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center">
          <div class="w-full h-full bg-black bg-opacity-30 absolute inset-0 z-0"></div>
            <div class="min-h-separator grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
              <div class="px-6 col-start-1 lg:col-start-3 col-span-6 relative min-h-separator flex flex-col justify-center py-16">
                 <h2 class="font-serif-light text-4xl mb-4 text-brand">"Although we had always operated internationally out of Perth, in the early 2000s it became clear that there was opportunity beyond the Asia Pacific region"</h2>
                    <p class="font-sans text-gd-neutral-medium">Michael and Lloyd, Founders & Directors</p>
              </div>
            </div>
      </div>

    <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 overflow-hidden pt-6 md:pt-12 lg:pt-20 mb-24">
        <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-2 md:col-span-7 lg:col-start-3 md:pr-8 lg:pr-0">
          <!-- <h3 class="font-sans tracking-widest uppercase text-brand">Our Service</h3> -->
          <p class="font-serif text-3xl mb-6 text-brand">Gerard Daniels’ specialist team of energy consultants has the experience, industry acumen and global network to help this sector evolve and respond to many of these challenges.</p>
      </div>

         <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-4 md:col-span-6 lg:col-start-6 h-full py-8 relative z-10 md:pr-8 lg:pr-0">
          <p class="font-sans text-lg leading-relaxed mb-4">We work across the entire energy sector supply chain to help shape high performing boards and executive leadership teams through executive search and board consulting in all major oil and gas industry locations.</p>
          <p class="font-sans text-lg leading-relaxed mb-4">We connect clients with talent in HSEQ, contracts and procurement, commercial, finance, HR and legal disciplines – drawing on a talent network that spans exploration and subsurface, development engineering, projects and operations.</p>
          <p class="font-sans text-lg leading-relaxed mb-4">From start up exploration and production businesses to larger mid-stream and downstream providers, Gerard Daniels has the skills, the network and experience to help energy sector clients to work through challenges and achieve optimal success.</p>
       </div>
    </div>

    <div class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
      <div class="px-6 md:px-0 col-start-1 col-span-full md:col-start-2 md:col-span-7 lg:col-start-3 mb-8 md:pr-8 lg:pr-0">
          <h3 class="font-serif text-2xl text-brand">Related Services</h3>
      </div>

      </div>

    <div class="mb-16">
           <TheSlider aos="" aosDuration="0" />
      </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.min-h-separator {
    min-height: 600px;
}
</style>