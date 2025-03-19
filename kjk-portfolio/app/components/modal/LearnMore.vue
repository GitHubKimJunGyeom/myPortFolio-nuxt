<script lang="ts" setup>
  import type { Collections } from '@nuxt/content'
  import { withLeadingSlash, joinURL } from 'ufo'

  
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })
  const { locale, t, localeProperties } = useI18n()
  
  const path = computed(() => withLeadingSlash(joinURL("careers", locale.value, props.name)))
  const collectionName = `${props.name}_${locale.value}`;
  const collection = computed(() => collectionName as keyof Collections)

  const { data: page } = await useAsyncData(path.value, async () =>
    await queryCollection(collection.value).path(path.value).first()
  )

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

</script>
<template>
  <UModal 
    :title="`${t(`career.careerDetail`)}`">
    <a class="cursor-pointer text-indigo-500 inline-flex items-center">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    </a>
    <template #body>
      <article class="markdown mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <ContentRenderer
          v-if="page"
          :dir="localeProperties?.dir ?? 'ltr'"
          :value="page"
        />
      </article>
    </template>
  </UModal>
</template>