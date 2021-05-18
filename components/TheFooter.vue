<template>
  <div class="bg-gd-yellow-light py-32 border-b-8 border-brand relative overflow-hidden">
      <img :src="require(`~/assets/images/footer.png`)" alt="footerbg" class="footer-bg">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center pb-24 lg:space-x-16">
            <div class="w-full lg:w-7/12 flex-shrink-0">
                <p class="text-xl text-center lg:text-left max-w-xl mx-auto lg:max-w-none">Stay ahead in a changing world. Subscribe to Gerard Daniels Insights, our monthly look at the critical thinking behind Executive Search & Leadership.</p>
            </div>
            <div class="w-full max-w-md lg:max-w-none flex-grow-1 flex items-center my-6 xl:my-0">
                <input type="email" name="" id="" class="transition duration-100 w-full px-4 py-3 rounded-l-md border outline-none focus:outline-none focus:border-brand">
                <button class="transition duration-100 px-6 py-3 bg-brand text-white rounded-r-md -ml-1 border border-brand hover:border-brand-dark hover:bg-brand-dark">Subscribe</button>
            </div>
        </div>
        <div class="flex items-start justify-center flex-wrap lg:flex-nowrap border-t py-16 text-sm -mx-4 lg:gap-6">
               <ul class="w-1/2 lg:w-1/6 p-6 lg:p-0">
                   <li class="text-brand sans-medium uppercase">Company</li>
                   <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">About Us</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Our Value</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Our Team</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Community</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Careers</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Recent Assignment</NuxtLink></li>
               </ul>
               <ul class="w-1/2 lg:w-1/6 p-6 lg:p-0">
                   <li class="text-brand sans-medium uppercase">Locations</li>
                   <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Perth</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Sydney</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">London</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Houston</NuxtLink></li>
               </ul>
               <ul class="w-1/2 lg:w-1/3 p-6 lg:p-0">
                   <li class="text-brand sans-medium uppercase">Services</li>
                   <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Executive Search</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Chair and Non-Executive Director Search</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Succession Planning and Internal Candidat Assessment - CEO and Other Executives</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Market Mapping and Talent Identification</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Talent and Organisational Structure Design</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Workforce Planning</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Remuneration Design and Governance</NuxtLink></li>
               </ul>
               <ul class="w-1/2 lg:w-1/4 p-6 lg:p-0">
                   <li class="text-brand sans-medium uppercase">Sector Expertise</li>
                   <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Mining & Metals</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Energy, Oil & Gas</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Infrastructure</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Industrial</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Aerospace & Defence</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Education, Social & Government Enterprise</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Financial Service</NuxtLink></li>
                    <li class="my-4"><NuxtLink to="/" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Healthcare & Life Sciences</NuxtLink></li>
               </ul>
        </div>

        <div class="flex flex-col lg:flex-row">
            <div class="w-full md:w-1/2 flex flex-col justify-center">
            <Logo class="mx-auto md:mx-0"/>
            <div class="text-sm whitespace-nowrap block lg:flex items-baseline mt-3 text-center md:text-left">
                <p>{{printYear}} &copy; Gerard Daniels. All rights reserved. </p>
                <NuxtLink to="/" class="whitespace-nowrap lg:mx-1 transition duration-100 hover:text-brand">Privacy Policy</NuxtLink> - 
                <NuxtLink to="/" class="whitespace-nowrap mx-1 transition duration-100 hover:text-brand">Terms & Conditions</NuxtLink> - 
                <NuxtLink to="/" class="whitespace-nowrap mx-1 transition duration-100 hover:text-brand">Cookies Policy</NuxtLink> 
            </div>
            </div>
            <div class="mt-4 lg:mt-0 w-full lg:w-1/2 text-right flex items-start justify-center md:justify-start lg:items-end lg:justify-end">
             <NuxtLink to="/" class="flex items-center text-sm">Follow Us
            <svg class="ml-2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.625 0.375H1.08984C0.492188 0.375 0 0.902344 0 1.53516V15C0 15.6328 0.492188 16.125 1.08984 16.125H14.625C15.2227 16.125 15.75 15.6328 15.75 15V1.53516C15.75 0.902344 15.2227 0.375 14.625 0.375ZM4.74609 13.875H2.42578V6.38672H4.74609V13.875ZM3.58594 5.33203C2.8125 5.33203 2.21484 4.73438 2.21484 3.99609C2.21484 3.25781 2.8125 2.625 3.58594 2.625C4.32422 2.625 4.92188 3.25781 4.92188 3.99609C4.92188 4.73438 4.32422 5.33203 3.58594 5.33203ZM13.5 13.875H11.1445V10.2188C11.1445 9.375 11.1445 8.25 9.94922 8.25C8.71875 8.25 8.54297 9.19922 8.54297 10.1836V13.875H6.22266V6.38672H8.4375V7.40625H8.47266C8.78906 6.80859 9.5625 6.17578 10.6875 6.17578C13.043 6.17578 13.5 7.75781 13.5 9.76172V13.875Z" fill="#E6A513"/>
            </svg>
          </NuxtLink>
            </div>
        </div>
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
.footer-bg {
    width: 100%;
    left:50%;
    transform: scale(2) translateX(-50%);
    transform-origin: center center;
    @apply absolute bottom-16 opacity-50 z-0;
}
@screen md {
    .footer-bg {
    @apply w-full absolute bottom-0 left-0 right-0 transform opacity-80 translate-x-0 scale-100;
}
}
</style>