<script setup lang="ts">
  // import type { Collections } from '@nuxt/content'
  // import { withLeadingSlash, joinURL } from 'ufo'

  
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })

  // alert(props.name)
  // const { locale, t, localeProperties } = useI18n()
  
  // const path = computed(() => withLeadingSlash(joinURL("projects", locale.value, props.name)))
  // const collectionName = `${props.name}_${locale.value}`;
  // const collection = computed(() => collectionName as keyof Collections)

  // const { data: page } = await useAsyncData(path.value, async () =>
  //   await queryCollection(collection.value).path(path.value).first()
  // )

  // if (!page.value) {
  //   throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  // }
</script>
<div class="w-screen h-full dark:bg-gray-700">
  <div class="flex justify-center flex-wrap">
    <div class="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900">
      <div class="flex flex-col items-center md:items-start px-6 py-4">
        
        <div class="flex flex-col w-24">
          <h2 class="font-bold text-xl dark:text-gray-100">Basic Plan</h2>
          <div class="border-2 border-blue-500 mb-3 text"></div>
        </div>
       
        <div class="text-gray-500 dark:text-gray-200 text-center md:text-start">
          <p>In this plan you will get</p>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center md:items-start bg-gray-100 px-6 py-3 rounded-lg dark:bg-blue-100">
        <h2 class="font-bold text-2xl mb-2">$9.99/mo</h2>
        <p class="text-gray-600 dark:text-gray-600">Access to basic features</p>
        <button class="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">Subscribe</button>
      </div>
    </div>
  </div>
</div>




