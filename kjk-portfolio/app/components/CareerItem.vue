<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })
</script>
<template>
  <div class="text-gray-600 body-font">
    <div class="px-5 py-1 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ $t(`career.${props.name}.company`) }}</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">{{ $t(`career.${props.name}.period`) }}
              </p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4 whitespace-pre-line">{{ $t(`career.${props.name}.description`) }}</p>
            <ModalLearnMore 
              :name="name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
