<script setup lang="ts">

    useHead({
        title: 'KJK Portfolio',
        meta: [
            { 
                name: 'viewport', 
                content: 'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1' 
            },
            { 
                name: 'charset', content: 'utf-8' 
            },
            { 
                name: 'color-scheme', content: 'light dark' 
            },
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap',
            },
        ]
    })
</script>

<template>
  <slot />
</template>
