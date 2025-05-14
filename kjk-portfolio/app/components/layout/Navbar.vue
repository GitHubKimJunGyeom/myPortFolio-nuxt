<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const isMenuOpen = ref(false);
    const menuButtonRef = ref<HTMLElement | null>(null);
    const mobileMenuRef = ref<HTMLElement | null>(null);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
        isMenuOpen.value &&
        mobileMenuRef.value &&
        !mobileMenuRef.value.contains(target) &&
        menuButtonRef.value &&
        !menuButtonRef.value.contains(target)
    ) {
        isMenuOpen.value = false;
    }
    };

    onMounted(() => {
        document.addEventListener('click', closeMenu);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('click', closeMenu);
    });
</script>
<template>
    <header id="header" class="header sticky top-0 bg-white text-black z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a href="#introduce" class="text-2xl font-bold">KJK's Portfolio </a>
                </div>

                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="#about_me" class="hover:text-gray-300 transition-all">About me</a>
                    <a href="#skills" class="hover:text-gray-300 transition-all">Skills</a>
                    <a href="#archiving" class="hover:text-gray-300 transition-all">Archiving</a>
                    <a href="#projects" class="hover:text-gray-300 transition-all">Projects</a>
                    <a href="#career" class="hover:text-gray-300 transition-all">Career</a>
                    <a href="#contact" class="hover:text-gray-300 transition-all">Contact</a>
                </nav>

                <!-- Language Toggle Button -->
                <SettingsLanguageToggle />

                <!-- Mobile Menu Button (for smaller screens) -->
                <div class="md:hidden flex items-center">
                    <button
                        ref="menuButtonRef"
                        @click="toggleMenu"
                        class="text-black focus:outline-none"
                    >
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div
                ref="mobileMenuRef"
                v-show="isMenuOpen"
                class="md:hidden mt-5 space-y-4 transition-all"
            >
                <a href="#about_me" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">About me</a>
                <a href="#skills" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">Skill</a>
                <a href="#archiving" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">Archiving</a>
                <a href="#projects" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">Projects</a>
                <a href="#career" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">Career</a>
                <a href="#contact" @click="isMenuOpen = false" class="block text-lg hover:text-gray-300 transition-all">Contact</a>
            </div>
        </div>
    </header>
</template>