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
/** 영어 */
@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/en/LINESeedSans_W_Bd.woff2') format('woff2'),
        url('/fonts/en/LINESeedSans_W_Bd.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/en/LINESeedSans_W_He.woff2') format('woff2'),
        url('/fonts/en/LINESeedSans_W_He.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/en/LINESeedSans_W_Rg.woff2') format('woff2'),
        url('/fonts/en/LINESeedSans_W_Rg.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/en/LINESeedSans_W_Th.woff2') format('woff2'),
        url('/fonts/en/LINESeedSans_W_Th.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/en/LINESeedSans_W_XBd.woff2') format('woff2'),
        url('/fonts/en/LINESeedSans_W_XBd.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

/** 한국어 */
@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ko/LINESeedKR-Bd.woff2') format('woff2'),
        url('/fonts/ko/LINESeedKR-Bd.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ko/LINESeedKR-Rg.woff2') format('woff2'),
        url('/fonts/ko/LINESeedKR-Rg.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ko/LINESeedKR-Th.woff2') format('woff2'),
        url('/fonts/ko/LINESeedKR-Th.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

/** 日本語 */
@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ja/LINESeedJP_OTF_Bd.woff2') format('woff2'),
        url('/fonts/ja/LINESeedJP_OTF_Bd.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    unicode-range: U+3000-30FF, U+4E00-9FFF;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ja/LINESeedJP_OTF_Eb.woff2') format('woff2'),
        url('/fonts/ja/LINESeedJP_OTF_Eb.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    unicode-range: U+3000-30FF, U+4E00-9FFF;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ja/LINESeedJP_OTF_Rg.woff2') format('woff2'),
        url('/fonts/ja/LINESeedJP_OTF_Rg.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+3000-30FF, U+4E00-9FFF;
}

@font-face {
    font-family: 'LINESeed';
    src: url('/fonts/ja/LINESeedJP_OTF_Th.woff2') format('woff2'),
        url('/fonts/ja/LINESeedJP_OTF_Th.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    unicode-range: U+3000-30FF, U+4E00-9FFF;
}

/* 적용 */
body {
font-family: 'LINESeed';
}
</style>

<template>
  <slot />
</template>
