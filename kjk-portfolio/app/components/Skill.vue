<template>
    <div id="skills" class="flex items-center justify-center w-screen pt-7 pb-6 bg-yellow-500">
        <a href="#skills">
        <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
        </a>
        <h2 class="font-black text-black text-2xl lg:text-6xl pb-6 border-b"> {{ $t('skill.title') }} </h2>
    </div>
    <div class="flex items-center justify-center w-screen pb-10 bg-yellow-500">
        <div class="rounded-[12px] bg-white/80 p-4 w-screen md:w-auto shadow-md border flex gap-2 justify-center items-center">
            <div class="mt-8 grid md:grid-cols-10 gap-1">
                <div class="flex items-center col-span-5 md:col-span-3 font-bold text-2xl py-1 px-2 m-1 text-black">
                    <img src="/static/assets/img/svg/nuxt.svg" class="items-center justify-center w-[32px] [h-32px]">
                    {{ $t('skill.language') }}
                </div>
                <ul class="col-span-7 py-1 px-2 m-1 text-left flex flex-wrap">
                    <li class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.language_typescript') }}
                    </li>
                    <li class="bg-gray-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.language_javascript') }}
                    </li>
                    <li class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.language_php') }}
                    </li>
                </ul>
                <div class="flex items-center col-span-5 md:col-span-3 font-bold text-2xl py-1 px-2 m-1 text-black">
                    <img src="/static/assets/img/svg/language-typescript.svg" class="w-[32px] [h-32px]">
                    {{ $t('skill.frontend') }}
                </div>
                <ul class="col-span-7 text-2xl py-1 px-2 m-1 text-left flex flex-wrap">
                    <li class="bg-green-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.frontend_nuxt') }}
                    </li>
                    <li class="bg-red-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.frontend_blade') }}
                    </li>
                    <li class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.frontend_tailwindcss') }}
                    </li>
                    <li class="bg-gray-100 text-gray-800 text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.frontend_sass') }}
                    </li>
                </ul>
                <div class="flex items-center col-span-5 md:col-span-3 font-bold text-2xl py-1 px-2 m-1 text-black">
                    <img src="/static/assets/img/svg/server-network.svg" class="w-[32px] [h-32px]">
                        {{ $t('skill.backend') }}
                </div>
                <ul class="col-span-7 text-2xl py-1 px-2 m-1 text-left flex flex-wrap">
                    <li class="bg-red-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.backend_laravel') }}
                    </li>
                </ul>
                <div class="flex items-center col-span-5 md:col-span-3 font-bold text-2xl py-1 px-2 m-1 text-black">
                    <img src="/static/assets/img/svg/database-search.svg" class="w-[32px] [h-32px]">
                        {{ $t('skill.DB') }}
                </div>
                <ul class="col-span-7 text-2xl py-1 px-2 m-1 text-left flex flex-wrap">
                    <li class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.DB_MySql') }}
                    </li>
                    <li class="bg-yellow-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.DB_DynamoDB') }}
                    </li>
                </ul>
                <div class="flex items-center col-span-5 md:col-span-3 font-bold text-2xl py-1 px-2 m-1 text-black">
                    <img src="/static/assets/img/svg/docker.svg" class="w-[32px] [h-32px]">
                    {{ $t('skill.devops') }}
                </div>
                <ul class="col-span-7 py-1 px-2 m-1 text-left flex flex-wrap">
                    <li class="bg-yellow-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.devops_aws') }}
                    </li>
                    <li class="bg-gray-500 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.devops_google_cloud') }}
                    </li>
                    <li class="bg-blue-600 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.devops_docker') }}
                    </li>
                    <li class="bg-gray-800 text-white text-center py-1 px-2 m-1 text-sm rounded">
                        {{ $t('skill.devops_vercel') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>