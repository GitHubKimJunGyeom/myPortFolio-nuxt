<template>
    <div id="skills" class="flex items-center justify-center w-screen pt-7 pb-6 bg-yellow-500">
        <a href="#skills">
        <img src="@/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
        </a>
        <h2 class="font-bold text-2xl lg:text-4xl pb-6 border-b"> {{ $t('skill') }} </h2>
    </div>
    <div class="flex items-center justify-center w-screen pb-10 bg-yellow-500">
        <div class="h-80 w-[700px] rounded-[12px] bg-white p-4 shadow-md border flex gap-2 justify-center items-center">
            <div>
                <label>test</label>
                <span class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-lg rounded">Primary</span>
                <span class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-lg rounded">Secondary</span>
                <span class="bg-green-500 font-bold text-white text-center py-1 px-2 text-lg rounded">Success</span>
                <span class="bg-red-500 font-bold text-white text-center py-1 px-2 text-lg rounded">Danger</span>
                <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-lg rounded">Warning</span>
                <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-lg rounded">Info</span>
                <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-lg rounded">Light</span>
                <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-lg rounded">Dark</span>
            </div>
        </div>
    </div>

</template>