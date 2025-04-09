<script setup lang="ts">
  import type { Collections } from '@nuxt/content'
  import { withLeadingSlash, joinURL } from 'ufo'
  
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })

  const { locale, t, localeProperties } = useI18n()
  const path = computed(() => withLeadingSlash(joinURL("projects", locale.value, props.name)))
  const collectionName = `${props.name}_${locale.value}`;
  const collection = computed(() => collectionName as keyof Collections)

  const { data: page } = await useAsyncData(path.value, async () =>
    await queryCollection(collection.value).path(path.value).first() as Collections['introduction_ko'] | Collections['introduction_ja']
  )

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }
</script>
<template>
    <div v-if ="page" class="border w-auto max-w-full mx-3 rounded-lg shadow-2xl mt-5">
      <div class="flex flex-col items-start px-6 py-4">
        <div class="inline-block border-b-1 border-gray-300 mb-3">
          <div class="font-bold text-black text-xl">{{page?.title}}</div>
          <div class="h-1 border-2 border-blue-500 mb-1"></div>
          <p class="text-gray-500">{{ page?.date }}</p>
          <p class="text-gray-500">{{ page?.isindividual }}</p>
        </div>
        <div class="text-start">
          <p class="text-black font-black mb-1">{{ page?.description }}</p>
          <ul class="text-gray-500 ">
            <li v-for="(tag, index) in page?.sub_description" :key="index">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-start bg-gray-100 px-6 py-3 rounded-lg">
        <p class="border-l-4 border-gray-500 pl-2.5 mb-2">
          <a href="https://tokyokimportfolio.vercel.app" class="text-blue-500 hover:underline">
            {{ page?.url }}
          </a>
        </p>
        <p class="text-black rounded-lg border border-yellow-300 bg-yellow-100 p-2">{{ page?.tags}}</p>
        <ModalReadMe 
          :page="page"
        />
      </div>
    </div>
</template>





