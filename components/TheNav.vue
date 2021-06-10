<template>
  <nav class="w-full px-8 h-20 flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-between border-b relative z-50">
    <!-- <Logo class="md:mr-1/16 lg:mr-1/12"/> -->
    <div class="w-full lg:w-auto flex items-center justify-between">
      <NuxtLink to="/"><Logo class="w-56 lg:w-64 lg:flex-shrink-1"/></NuxtLink>
       <div class="flex lg:hidden">
        <svg v-if="!mobileMenuOpen" id="menu-icon" @click="mobileMenuOpen = true" class="transition duration-100 cursor-pointer text-gd-neutral-darker hover:text-brand" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4643 5.68085C21.7321 5.68085 22 5.44149 22 5.10638V3.57447C22 3.28723 21.7321 3 21.4643 3H2.53571C2.22321 3 2 3.28723 2 3.57447V5.10638C2 5.44149 2.22321 5.68085 2.53571 5.68085H21.4643ZM21.4643 13.3404C21.7321 13.3404 22 13.1011 22 12.766V11.234C22 10.9468 21.7321 10.6596 21.4643 10.6596H2.53571C2.22321 10.6596 2 10.9468 2 11.234V12.766C2 13.1011 2.22321 13.3404 2.53571 13.3404H21.4643ZM21.4643 21C21.7321 21 22 20.7606 22 20.4255V18.8936C22 18.6064 21.7321 18.3191 21.4643 18.3191H2.53571C2.22321 18.3191 2 18.6064 2 18.8936V20.4255C2 20.7606 2.22321 21 2.53571 21H21.4643Z" fill="currentColor"/>
        </svg>

        <svg v-if="mobileMenuOpen" id="close-icon" @click="mobileMenuOpen = false" class="transition duration-100 cursor-pointer text-gd-neutral-darker hover:text-brand" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6776 11.975L18.8357 6.86698L19.8873 5.81534C20.0376 5.6651 20.0376 5.41471 19.8873 5.2144L18.7856 4.11268C18.5853 3.96244 18.3349 3.96244 18.1847 4.11268L12.025 10.3224L5.81534 4.11268C5.6651 3.96244 5.41471 3.96244 5.2144 4.11268L4.11268 5.2144C3.96244 5.41471 3.96244 5.6651 4.11268 5.81534L10.3224 11.975L4.11268 18.1847C3.96244 18.3349 3.96244 18.5853 4.11268 18.7856L5.2144 19.8873C5.41471 20.0376 5.6651 20.0376 5.81534 19.8873L12.025 13.6776L17.133 18.8357L18.1847 19.8873C18.3349 20.0376 18.5853 20.0376 18.7856 19.8873L19.8873 18.7856C20.0376 18.5853 20.0376 18.3349 19.8873 18.1847L13.6776 11.975Z" fill="currentColor"/>
        </svg>

       </div>
    </div>
    
    <div class="hidden flex-1 lg:flex flex-col lg:flex-row items-center justify-between bg-white w-full h-64 lg:h-full lg:w-auto absolute top-20 lg:relative lg:top-0 shadow-2xl lg:shadow-none">
      <ul class="center w-3/4 font-serif-light flex flex-col lg:flex-row items-center justify-center text-base xl:text-lg">
      <li class="mx-3 xl:mx-5 flex items-center relative group cursor-pointer" @mouseover="dropdownDo = true" @mouseleave="dropdownDo = false">
        <span>What We Do</span>
        <svg class="ml-2" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.30859 7.48438C6.48438 7.66016 6.73047 7.66016 6.90625 7.48438L12.1094 2.31641C12.2852 2.17578 12.2852 1.89453 12.1094 1.71875L11.4062 1.05078C11.2656 0.875 10.9844 0.875 10.8086 1.05078L6.625 5.19922L2.40625 1.05078C2.23047 0.875 1.98438 0.875 1.80859 1.05078L1.10547 1.71875C0.929688 1.89453 0.929688 2.17578 1.10547 2.31641L6.30859 7.48438Z" fill="#E6A513"/>
          </svg>
          
          <transition name="fade">
          <div v-if="dropdownDo" class="dropdown font-sans text-sm px-8 py-4 bg-white rounded-lg shadow-gd absolute z-20">
            <ul class=""> 
              <li class="my-4"><NuxtLink to="/" @click="dropdownDo = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Executive Search</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownDo = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Chair and Non-Executive Director Search</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownDo = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Succession Planning and Internal Candidate Assessment - CEO and Other Executives</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownDo = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Market Mapping and Talent Identification</NuxtLink></li>
            </ul>
          </div>
          </transition>
      </li>
      <li class="mx-3 xl:mx-5 flex items-center relative group cursor-pointer" @mouseover="dropdownSectors = true" @mouseleave="dropdownSectors = false">
        Sector Expertise
        <svg class="ml-2" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.30859 7.48438C6.48438 7.66016 6.73047 7.66016 6.90625 7.48438L12.1094 2.31641C12.2852 2.17578 12.2852 1.89453 12.1094 1.71875L11.4062 1.05078C11.2656 0.875 10.9844 0.875 10.8086 1.05078L6.625 5.19922L2.40625 1.05078C2.23047 0.875 1.98438 0.875 1.80859 1.05078L1.10547 1.71875C0.929688 1.89453 0.929688 2.17578 1.10547 2.31641L6.30859 7.48438Z" fill="#E6A513"/>
          </svg>

          <transition name="fade">
          <div v-if="dropdownSectors" class="dropdown font-sans text-sm px-8 py-4 bg-white rounded-lg shadow-gd absolute z-20">
            <ul class=""> 
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Mining & Metals</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/mining-oil-gas" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Energy & Renewables</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Infrastructure</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Industrial</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Financial Services</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Healthcare</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Life Sciences, Pharmaceuticals & Biotechnology</NuxtLink></li>
              <li class="my-4"><NuxtLink to="/" @click="dropdownSectors = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Co-Operatives and Mutuals</NuxtLink></li>
            </ul>
          </div>
          </transition>
      </li>
      <li class="mx-3 xl:mx-5 flex items-center relative group cursor-pointer" @mouseover="dropdownOperates = true" @mouseleave="dropdownOperates = false">
        Where We Operate
        <svg class="ml-2" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.30859 7.48438C6.48438 7.66016 6.73047 7.66016 6.90625 7.48438L12.1094 2.31641C12.2852 2.17578 12.2852 1.89453 12.1094 1.71875L11.4062 1.05078C11.2656 0.875 10.9844 0.875 10.8086 1.05078L6.625 5.19922L2.40625 1.05078C2.23047 0.875 1.98438 0.875 1.80859 1.05078L1.10547 1.71875C0.929688 1.89453 0.929688 2.17578 1.10547 2.31641L6.30859 7.48438Z" fill="#E6A513"/>
          </svg>

          <transition name="fade">
          <div v-if="dropdownOperates" class="dropdown font-sans text-sm px-8 py-6 bg-white rounded-lg shadow-gd absolute z-20">
            <ul class="mb-4"> 
              <li class="text-brand mb-1">Asia Pacific</li>
              <li class="my-1"><NuxtLink to="/" @click="dropdownOperates = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Sydney</NuxtLink></li>
              <li class="my-1"><NuxtLink to="/" @click="dropdownOperates = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Perth</NuxtLink></li>
            </ul>
            <ul class="mb-4"> 
              <li class="text-brand mb-1">Europe, Middle East & Africa</li>
              <li class="my-1"><NuxtLink to="/" @click="dropdownOperates = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">London</NuxtLink></li>
            </ul>
            <ul class=""> 
              <li class="text-brand mb-1">The Americas</li>
              <li class="my-1"><NuxtLink to="/" @click="dropdownOperates = false" class="transition duration-100 cursor-pointer leading-normal hover:text-brand">Houston</NuxtLink></li>
            </ul>
          </div>
          </transition>
      </li>
    </ul>

    <ul class="right flex-shrink-0 flex items-center text-xs lg:text-sm justify-end">
      <li class="mx-2 xl:mx-4 flex items-center text-brand relative group cursor-pointer" @mouseover="dropdownAbout = true" @mouseleave="dropdownAbout = false">
        <p>About Us</p>
        <svg class="ml-2" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.30859 7.48438C6.48438 7.66016 6.73047 7.66016 6.90625 7.48438L12.1094 2.31641C12.2852 2.17578 12.2852 1.89453 12.1094 1.71875L11.4062 1.05078C11.2656 0.875 10.9844 0.875 10.8086 1.05078L6.625 5.19922L2.40625 1.05078C2.23047 0.875 1.98438 0.875 1.80859 1.05078L1.10547 1.71875C0.929688 1.89453 0.929688 2.17578 1.10547 2.31641L6.30859 7.48438Z" fill="#E6A513"/>
        </svg>

          <transition name="fade">
        <div v-if="dropdownAbout" class="dropdown dropdown-about font-sans text-sm px-8 py-4 bg-white rounded-lg shadow-gd absolute z-20">
          <ul class=""> 
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">About Us</NuxtLink></li>
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Our Value</NuxtLink></li>
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Our Team</NuxtLink></li>
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Community</NuxtLink></li>
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Careers</NuxtLink></li>
            <li class="my-4"><NuxtLink to="/" @click="dropdownAbout = false" class="transition duration-100 cursor-pointer leading-normal text-gd-neutral-dark hover:text-brand">Recent Assignment</NuxtLink></li>
          </ul>
        </div>
        </transition>
      </li>
      <li class="mx-2 xl:mx-4 flex items-center text-brand">
        <NuxtLink to="/">Insights</NuxtLink>
      </li>
      <li class="mx-2 xl:mx-4 flex items-center text-brand">
        <NuxtLink to="/">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.625 0.375H1.08984C0.492188 0.375 0 0.902344 0 1.53516V15C0 15.6328 0.492188 16.125 1.08984 16.125H14.625C15.2227 16.125 15.75 15.6328 15.75 15V1.53516C15.75 0.902344 15.2227 0.375 14.625 0.375ZM4.74609 13.875H2.42578V6.38672H4.74609V13.875ZM3.58594 5.33203C2.8125 5.33203 2.21484 4.73438 2.21484 3.99609C2.21484 3.25781 2.8125 2.625 3.58594 2.625C4.32422 2.625 4.92188 3.25781 4.92188 3.99609C4.92188 4.73438 4.32422 5.33203 3.58594 5.33203ZM13.5 13.875H11.1445V10.2188C11.1445 9.375 11.1445 8.25 9.94922 8.25C8.71875 8.25 8.54297 9.19922 8.54297 10.1836V13.875H6.22266V6.38672H8.4375V7.40625H8.47266C8.78906 6.80859 9.5625 6.17578 10.6875 6.17578C13.043 6.17578 13.5 7.75781 13.5 9.76172V13.875Z" fill="#E6A513"/>
          </svg>
        </NuxtLink>
      </li>
    </ul>
    </div>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownDo: false,
      dropdownSectors: false,
      dropdownOperates: false,
      dropdownAbout: false,
      mobileMenuOpen: false
    }
  }
}
</script>

<style>
nav{
  height: 88px;
}
.dropdown {
  top:29px;
  width: 380px;
}
.dropdown-about {
  top:18px;
  width: 260px;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s;
  transform: translateY(0);
}
.fade-enter, .fade-leave-active {
  transform: translateY(-8px);
  opacity: 0;
}
</style>