<script lang="ts" setup>
  const readMeTitle = ref("README.md")
  
  const props = defineProps({
    page: {
      type: Object,
      default: ''
    }
  })

</script>
<template>
  <UModal 
    :title="readMeTitle">
    <button class="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">Read Me</button>
    <template #body>
      <article class="markdown mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <ContentRenderer
          v-if="page"
          :value="page"
        />
      </article>
    </template>
  </UModal>
</template>