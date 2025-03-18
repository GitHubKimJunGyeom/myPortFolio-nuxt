<script setup lang="ts">
  import * as locales from '@nuxt/ui/locale'

  const { locale } = useI18n()
</script>

<template>
  <html>
    <body>
    <LayoutScrollToTop />
    <NuxtLayout>
      <UApp :locale="locales[locale]">
        <NuxtPage />
      </UApp>
    </NuxtLayout>
    </body>
  </html>
</template>
