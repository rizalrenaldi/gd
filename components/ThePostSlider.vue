<template>
<div data-aos="fade-in" data-aos-duration="1200" class="mt-10">
    <div class="grid grid-cols-12">
        <div class="col-start-1 lg:col-start-1 col-span-full relative">
            <client-only>
                <vue-tiny-slider v-bind="tinySliderOptions" id="post" class="flex">
                    <div v-for="post in posts" :key="post.id" class="w-1/2 h-80 p-2">
                        <NuxtLink :to="post.link" class="backface group slider-box drag-none">
                            <div class="relative z-10">
                            <h3 class="font-serif text-white text-2xl">{{post.title}}</h3>
                              <NuxtLink to="/" class="mt-2 text-brand text-sm flex items-center justify-start">
                                   <p>Read more</p>
                                    <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.72727 4.13559L8.09486 4.8226C7.96838 5.00339 7.96838 5.29266 8.09486 5.43729L13.8182 11.9819L8.09486 18.5627C7.96838 18.7073 7.96838 18.9966 8.09486 19.1774L8.72727 19.8644C8.88538 20.0452 9.10672 20.0452 9.26482 19.8644L15.9051 12.3073C16.0316 12.1266 16.0316 11.8734 15.9051 11.6927L9.26482 4.13559C9.10672 3.9548 8.88538 3.9548 8.72727 4.13559Z" fill="currentColor"/>
                                    </svg>
                                </NuxtLink>

                            </div>
                            <img :src="require(`~/assets/images/${post.image}`)" alt="service" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center">
                            <div class="w-full h-full overlay-card absolute inset-0 z-0"></div>
                        </NuxtLink>
                    </div>
           
                    <div class="w-1/2 h-80 p-2">
                        <div class="slider-boxs bg-white drag-none">
                        </div>
                    </div>
                    
                </vue-tiny-slider>
                <div class="grid grid-cols-12 items-center my-6">
                    <ul id="post-controls" class="post-controls col-start-1 flex items-center px-2">
                        <li><BtnArrowLeft/></li>
                        <li><BtnArrowRight/></li>
                        <!-- GRADIENT 0, 35 <li class="transition duration-200 flex-shrink-0 mr-1 button-control bg-gd-yellow-light hover:bg-gd-yellow text-gd-neutral-dark text-opacity-30 hover:text-opacity-100 prev">
                            <svg class="w-4 h-4" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 0.828125L11.8125 1.71875C12 1.95312 12 2.32812 11.8125 2.51562L3.32812 11L11.8125 19.5312C12 19.7188 12 20.0938 11.8125 20.3281L10.875 21.2188C10.6406 21.4531 10.3125 21.4531 10.0781 21.2188L0.234375 11.4219C0.046875 11.1875 0.046875 10.8594 0.234375 10.625L10.0781 0.828125C10.3125 0.59375 10.6406 0.59375 10.875 0.828125Z" fill="currentColor"/>
                            </svg>
                        </li>
                        <li class="transition duration-200 flex-shrink-0 button-control bg-gd-yellow-light hover:bg-gd-yellow hover:text-opacity-100 text-gd-neutral-dark next">
                            <svg class="w-4 h-4" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07812 21.2188L0.140625 20.3281C-0.046875 20.0937 -0.046875 19.7187 0.140625 19.5312L8.625 11.0469L0.140628 2.51562C-0.0468719 2.32812 -0.0468719 1.95312 0.140628 1.71875L1.07813 0.828125C1.3125 0.59375 1.64063 0.59375 1.875 0.828125L11.7188 10.625C11.9063 10.8594 11.9063 11.1875 11.7188 11.4219L1.875 21.2188C1.64062 21.4531 1.3125 21.4531 1.07812 21.2188Z" fill="currentColor"/>
                            </svg>
                        </li> -->
                    <NuxtLink to="/" class="group select-none ml-8 font-sans text-sm whitespace-nowrap flex items-center">View all
                        <svg class="transition duration-200 transform group-hover:translate-x-1 ml-2 w-1.5" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.818181 15.8644L0.106719 15.1774C-0.0355731 14.9966 -0.0355731 14.7073 0.106719 14.5627L6.54545 8.01808L0.106722 1.43729C-0.0355708 1.29266 -0.0355707 1.00339 0.106722 0.822599L0.818184 0.135593C0.99605 -0.0451978 1.24506 -0.0451977 1.42293 0.135593L8.89328 7.69266C9.03557 7.87345 9.03557 8.12656 8.89328 8.30735L1.42292 15.8644C1.24506 16.0452 0.996047 16.0452 0.818181 15.8644Z" fill="#3A3228"/>
                        </svg>

                    </NuxtLink>
                    </ul>
                </div>
            </client-only>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    "title": "Improving leadership health and wellbeing",
                    "link": "/",
                    "image": "post1.jpg"
                },
                {
                    "title": "Future-proofing remuneration strategies in the mining sector",
                    "link": "/",
                    "image": "post2.jpg"
                },
                {
                    "title": "How to prepare for your first CFO role",
                    "link": "/",
                    "image": "post3.jpg"
                },
                {
                    "title": "Helping to smooth the transition into new executive roles",
                    "link": "/",
                    "image": "post4.jpg"
                },
                {
                    "title": "Gerard Daniels celebrates a significant milestone this month",
                    "link": "/",
                    "image": "post5.jpg"
                },
                {
                    "title": "Driving performance in remote working teams",
                    "link": "/",
                    "image": "post1.jpg"
                },
                {
                    "title": "What does good crisis leadership look like?",
                    "link": "/",
                    "image": "post2.jpg"
                },
                {
                    "title": "Gerard Daniels appoints Fugro UK Country Director",
                    "link": "/",
                    "image": "post3.jpg"
                }
            ],
            tinySliderOptions: {
                "controlsContainer": "#post-controls",
                "mouseDrag": true,
                "items": 1,
                "center": false,
                "loop": false,
                "gutter": 0,
                "edgePadding": 80,
                "fixedWidth": 330,
                "controls": true,
                "navPosition": "bottom",
                "controlsPosition": "bottom",
                "responsive": {
                    "640": {
                        "edgePadding": 100,
                        "items": 3
                    },
                    "1024": {
                        "edgePadding": 230,
                        "items": 3
                    }
                },
            }
        }
    },
}
</script>

<style>

.button-control {
    @apply cursor-pointer w-10 h-10 rounded-md flex items-center justify-center;
}

 #post-iw {
        margin: 0 calc(100vw / 6)!important;
    }
    .post-controls {
        margin-left: calc(100vw / 6);
    }


@media screen and (min-width: 768px) and (max-width: 1023px) {
   #post-iw {
        margin: 0 calc(100vw / 8)!important;
    }
    .post-controls {
        margin-left: calc(100vw / 8);
    }
}

@media screen and (min-width: 1024px) {
     #post-iw {
        margin: 0 calc(100vw / 6)!important;
    }
    .post-controls {
        margin-left: calc(100vw / 6);
    }
}

.tns-outer {
    overflow-x: hidden;
}
.tns-controls {
    z-index: 100;
}
.tns-nav {
    z-index: 10;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.tns-nav button {
    background-color: #474A4D;
}

button.tns-nav-active {
    background-color: #E0E2E3!important;
}
.tns-controls button,
.tns-nav button:focus {
    outline: none;
}
.tns-controls > button[data-controls="next"] {
    position: absolute;
    right: 32px;
}
.tns-liveregion {
    display: none;
}
</style>