<script lang="ts" setup>
  const temp = ref("comming soon")
  // import type { Collections } from '@nuxt/content'
  // import { withLeadingSlash, joinURL } from 'ufo'

  
  // const props = defineProps({
  //   name: {
  //     type: String,
  //     default: ''
  //   }
  // })
  // const { locale, t, localeProperties } = useI18n()
  
  // const path = computed(() => withLeadingSlash(joinURL("careers", locale.value, props.name)))
  // const collectionName = `${props.name}_${locale.value}`;
  // const collection = computed(() => collectionName as keyof Collections)

  // const { data: page } = await useAsyncData(path.value, async () =>
  //   await queryCollection(collection.value).path(path.value).first()
  // )

  // if (!page.value) {
  //   throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  // }

</script>
<template>
  <UModal 
    :title="temp">
    <button class="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">Read Me</button>
    <template #body>
      <article class="markdown mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Comming soon
        <!-- <ContentRenderer
          v-if="page"
          :dir="localeProperties?.dir ?? 'ltr'"
          :value="page"
        /> -->
      </article>
    </template>
  </UModal>
</template>