<script setup lang="ts">
    import { onMounted } from 'vue';

    onMounted(()=> {
        // Mobile Menu Toggle
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if(menuButton != null && mobileMenu != null) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        //TODO const menuHeight = document.querySelector(".header");

        // const location = document.querySelector("#header");

        // console.log(menuHeight)
        // console.log(location)

    });
 
</script>
<template>
    <header id="header" class="header sticky top-0 bg-white text-black z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a href="#" class="text-2xl font-bold">KJK's Portfolio </a>
                </div>

                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="#about_me" class="hover:text-gray-300 transition-all">About me</a>
                    <a href="#skills" class="hover:text-gray-300 transition-all">Skills</a>
                    <a href="#archiving" class="hover:text-gray-300 transition-all">Archiving</a>
                    <a href="#projects" class="hover:text-gray-300 transition-all">Projects</a>
                    <a href="#career" class="hover:text-gray-300 transition-all">Career</a>
                   
                </nav>
                <SettingsLanguageToggle />

                <!-- Mobile Menu Button (for smaller screens) -->
                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-black focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
                <a href="#about_me" class="block text-lg hover:text-gray-300 transition-all">About me</a>
                <a href="#skill" class="block text-lg hover:text-gray-300 transition-all">Skill</a>
                <a href="#archiving" class="block text-lg hover:text-gray-300 transition-all">Archiving</a>
                <a href="#projects" class="block text-lg hover:text-gray-300 transition-all">Projects</a>
                <a href="#career" class="block text-lg hover:text-gray-300 transition-all">Career</a>
            </div>
        </div>
    </header>
</template>