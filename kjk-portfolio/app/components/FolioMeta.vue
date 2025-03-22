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
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1' },
            { name: 'charset', content: 'utf-8' },
            { name: 'color-scheme', content: 'light dark' },
        ],
        link: [
            {
                rel: 'stylesheet',
            },
        ]
    })
</script>

<style>
/* 한글용 LINE Seed */
@font-face {
font-family: 'LINESeed';
src: url('/ko/fonts/LINESeedKR-Bd.woff2') format('woff2'),
    url('/ko/fonts/LINESeedKR-Bd.woff') format('woff');
font-weight: 700;
font-style: normal;
}

@font-face {
font-family: 'LINESeed';
src: url('/ko/fonts/LINESeedKR-Rg.woff2') format('woff2'), /* WOFF2 우선 적용 */
    url('/ko/fonts/LINESeedKR-Rg.woff') format('woff');   /* WOFF 대체 적용 */
font-weight: 400;
font-style: normal;
}

@font-face {
font-family: 'LINESeed';
src: url('/ko/fonts/LINESeedKR-Th.woff2') format('woff2'), /* WOFF2 우선 적용 */
    url('/ko/fonts/LINESeedKR-Th.woff') format('woff');   /* WOFF 대체 적용 */
font-weight: 200;
font-style: normal;
}

/* 일본어 폰트 적용 */
@font-face {
font-family: 'LINESeed';
src: url('/fonts/LINESeedJP-Bd.woff2') format('woff2'),
    url('/fonts/LINESeedJP-Bd.woff') format('woff');
font-weight: 700;
font-style: normal;
unicode-range: U+3000-30FF;
}

@font-face {
font-family: 'LINESeed';
src: url('/fonts/LINESeedJP-Eb.woff2') format('woff2'),
    url('/fonts/LINESeedJP-Eb.woff') format('woff');
font-weight: 800;
font-style: normal;
unicode-range: U+3000-30FF;
}

@font-face {
font-family: 'LINESeed';
src: url('/fonts/LINESeedJP-Rg.woff2') format('woff2'),
    url('/fonts/LINESeedJP-Rg.woff') format('woff');
font-weight: 400;
font-style: normal;
unicode-range: U+3000-30FF; /* 일본어 유니코드 범위 */
}

@font-face {
font-family: 'LINESeed';
src: url('/fonts/LINESeedJP-Th.woff2') format('woff2'),
    url('/fonts/LINESeedJP-Th.woff') format('woff');
font-weight: 200;
font-style: normal;
unicode-range: U+3000-30FF; /* 일본어 유니코드 범위 */
}

/* 적용 */
body {
font-family: 'LINESeed';
}
</style>

<template>
  <slot />
</template>
