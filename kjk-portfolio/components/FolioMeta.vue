<script setup lang="ts">

    useHead({
        title: 'KJK Portfolio',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'charset', content: 'utf-8' },
            { name: 'color-scheme', content: 'light dark' },
        ],
        link,
    })

    defineOgImage({ url: '@/static/assets/img/jpg/background.jpg', width: 1200, height: 630, alt: 'KJK Portfolio' })
</script>

<template>
  <slot />
</template>
