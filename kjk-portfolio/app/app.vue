<script setup lang="ts">
  import * as locales from '@nuxt/ui/locale'

  const { locale } = useI18n()
</script>

<template>
  <html>
    <body>
    <NuxtLayout>
      <UApp :locale="locales[locale]">
        <NuxtPage />
      </UApp>
      <LayoutScrollToTop />
    </NuxtLayout>
    </body>
  </html>
</template>
