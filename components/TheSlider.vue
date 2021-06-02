<template>
<div data-aos="fade-in" data-aos-duration="1200" class="mt-10">
    <div class="grid grid-cols-12">
        <div class="col-start-1 lg:col-start-1 col-span-full relative">
            <client-only>
                <vue-tiny-slider v-bind="tinySliderOptions" id="services" class="flex">
                    <div v-for="service in services" :key="service.id" class="w-1/2 h-80 p-2">
                        <NuxtLink :to="service.link" class="backface group slider-box drag-none">
                            <h3 class="relative z-10 font-sans text-white uppercase text-sm tracking-wider">{{service.title}}</h3>
                            <img :src="require(`~/assets/images/${service.image}`)" alt="service" class="select-none drag-none absolute bottom-0 absolute-center-x z-0 w-full h-full object-cover object-center">
                            <div class="w-full h-full overlay-card absolute inset-0 z-0"></div>
                        </NuxtLink>
                    </div>
                    
                </vue-tiny-slider>
                <div class="grid grid-cols-12 items-center my-6">
                    <ul id="services-controls" class="services-controls col-start-1 flex items-center px-2">
                        <li><BtnArrowLeft/></li>
                        <li><BtnArrowRight/></li>
                        <!-- <li class="transition duration-200 flex-shrink-0 mr-1 button-control bg-gd-yellow-light hover:bg-gd-yellow text-gd-neutral-dark text-opacity-30 hover:text-opacity-100 prev">
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
            services: [
                {
                    "title": "Executive Search",
                    "image": "service1-executive.jpg",
                    "link": "/" 
                },
                {
                    "title": "Chair and Non-Executive Director Search",
                    "image": "service2-chair.jpg",
                    "link": "/" 
                },
                {
                    "title": "Market Mapping and Talent Identification",
                    "image": "service3-market.jpg",
                    "link": "/" 
                },
                {
                    "title": "Executive Performance Assessment",
                    "image": "service4-executive.jpg",
                    "link": "/" 
                },
                {
                    "title": "Succession Planning and Internal Candidate Assessment – CEOs and Other Executives",
                    "image": "service5-succession.jpg",
                    "link": "/" 
                },
                {
                    "title": "Board Assessment and Composition",
                    "image": "service6-board.jpg",
                    "link": "/" 
                },
                {
                    "title": "Talent and Organisational Structure Design",
                    "image": "service7-talent.jpg",
                    "link": "/" 
                },
                {
                    "title": "Remuneration Design and Governance",
                    "image": "service8-remuneration.jpg",
                    "link": "/" 
                },
                {
                    "title": "Workforce Planning",
                    "image": "service9-workforce.jpg",
                    "link": "/" 
                },
            ],
            tinySliderOptions: {
                "container": "services",
                "controlsContainer": "#services-controls",
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
/* #services {
    transform: translate3d(7.14286%, 0px, 0px)!important;
} */


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


.button-control {
    @apply cursor-pointer w-10 h-10 rounded-md flex items-center justify-center;
}

 #services-iw {
        margin: 0 calc(100vw / 6)!important;
    }
    .services-controls {
        margin-left: calc(100vw / 6);
    }


@media screen and (min-width: 768px) and (max-width: 1023px) {
   #services-iw {
        margin: 0 calc(100vw / 8)!important;
    }
    .services-controls {
        margin-left: calc(100vw / 8);
    }
}

@media screen and (min-width: 1024px) {
     #services-iw {
        margin: 0 calc(100vw / 6)!important;
    }
    .services-controls {
        margin-left: calc(100vw / 6);
    }
}

</style>