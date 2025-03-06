<script setup lang="ts">
    const { setLocale } = useI18n()

    const changeLanguage = (event: Event) => {
    const selectedLanguage = (event.target as HTMLSelectElement).value
    setLocale(selectedLanguage)
}
</script>

<template>
    <!-- Header Section -->
    <header class="sticky top-0 bg-white text-black z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <div class="flex-shrink-0">
                    <a href="#" class="text-2xl font-bold">KJK's Portfolio </a>
                </div>

                <!-- Navigation Menu -->
                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="#" class="hover:text-gray-300 transition-all">About me</a>
                    <a href="#services" class="hover:text-gray-300 transition-all">Archiving</a>
                    <a href="#about" class="hover:text-gray-300 transition-all">Projects</a>
                    <a href="#contact" class="hover:text-gray-300 transition-all">Career</a>
                    <select 
                        @change="changeLanguage" 
                        class="w-48 
                        border
                        border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-black"
                    >
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                    </select>
                </nav>

                <!-- Mobile Menu Button (for smaller screens) -->
                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
                <a href="#" class="block text-lg hover:text-gray-300 transition-all">About me</a>
                <a href="#services" class="block text-lg hover:text-gray-300 transition-all">Archiving</a>
                <a href="#about" class="block text-lg hover:text-gray-300 transition-all">Projects</a>
                <a href="#contact" class="block text-lg hover:text-gray-300 transition-all">Career</a>
            </div>
        </div>
    </header>
    
    <slot />
    
    <div class="text-center bg-black">
        <p class="mx-auto pt-6 pb-6 max-w-xl text-sm leading-8 text-white">
                    @ 2025. Kim Jun Gyeom. All rights reserved.
        </p>
    </div>
</template>
