<template>
    <div id="skills" class="flex items-center justify-center w-screen pt-7 pb-6 bg-yellow-500">
        <a href="#skills">
        <img src="@/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
        </a>
        <h2 class="font-black text-2xl lg:text-4xl pb-6 border-b"> {{ $t('skill') }} </h2>
    </div>
    <div class="flex items-center justify-center w-screen pb-10 bg-yellow-500">
        <div class="w-[1000px] rounded-[12px] bg-white/80 p-4 shadow-md border flex gap-2 justify-center items-center">
            <div class="mt-8 grid grid-cols-10 gap-1">
                <div class="flex col-span-3 font-bold text-2xl py-1 px-2 m-1">
                    <img src="@/static/assets/img/svg/nuxt.svg" class="pb-6 w-[64px] h-[64px]">
                    {{ $t('skill_language') }}
                </div>
                <div class="col-span-7 py-1 px-2 m-1 text-left">
                    <span class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_language_typescript') }}</span>
                    <span class="bg-gray-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_language_javascript') }}</span>
                    <span class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_language_php') }}</span>
                    <span class="bg-green-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_language_cSharp') }}</span>
                    <span class="bg-red-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_language_ruby') }}</span>
                </div>
                <div class="flex col-span-3 font-bold text-2xl py-1 px-2 m-1">
                <img src="@/static/assets/img/svg/language-typescript.svg" class="pb-6 w-[64px] h-[64px]">
                    {{ $t('skill_frontend') }}
                </div>
                <div class="col-span-7 text-2xl py-1 px-2 m-1 text-left">
                    <span class="bg-green-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_frontend_nuxt') }}</span>
                    <span class="bg-red-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_frontend_blade') }}</span>
                    <span class="bg-purple-400 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_frontend_blazor') }}</span>
                    <span class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_frontend_tailwindcss') }}</span>
                    <span class="bg-gray-100 text-gray-800 text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_frontend_sass') }}</span>
                </div>
                <div class="flex col-span-3 font-bold text-2xl py-1 px-2 m-1">
                    <img src="@/static/assets/img/svg/server-network.svg" class="pb-6 w-[64px] h-[64px]">
                        {{ $t('skill_backend') }}
                </div>
                <div class="col-span-7 text-2xl py-1 px-2 m-1 text-left">
                    <span class="bg-red-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_backend_laravel') }}</span>
                </div>
                <div class="flex col-span-3 font-bold text-2xl py-1 px-2 m-1">
                    <img src="@/static/assets/img/svg/database-search.svg" class="pb-6 w-[64px] h-[64px]">
                        {{ $t('skill_DB') }}
                </div>
                <div class="col-span-7 text-2xl py-1 px-2 m-1 text-left">
                    <span class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_DB_MySql') }}</span>
                    <span class="bg-gray-800 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_DB_SqlServer') }}</span>
                    <span class="bg-yellow-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_DB_DynamoDB') }}</span>
                </div>
                <div class="flex col-span-3 font-bold text-2xl py-1 px-2 m-1">
                    <img src="@/static/assets/img/svg/docker.svg" class="pb-6 w-[64px] h-[64px]">
                    {{ $t('skill_devops') }}
                </div>
                <div class="col-span-7 py-1 px-2 m-1 text-left">
                    <span class="bg-yellow-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_devops_aws') }}</span>
                    <span class="bg-gray-500 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_devops_googlespanner') }}</span>
                    <span class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_devops_docker') }}</span>
                    <span class="bg-gray-800 text-white text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_devops_vercel') }}</span>
                    <span class="bg-gray-100 text-gray-800 text-center py-1 px-2 m-1 text-sm rounded">{{ $t('skill_devops_render') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>