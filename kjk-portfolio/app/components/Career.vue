<script lang="ts" setup>
  const career_list = await queryCollection('career_list').first()
</script>
<template>
  <div id="career" class="w-full text-center">
    <div class="flex items-center justify-center w-screen pt-7 pb-6">
      <a href="#career">
        <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
      </a>
      <h2 class="font-black text-2xl lg:text-4xl pb-6 border-b"> {{ $t('career.title') }} </h2>
    </div>
  </div>

  <CareerItem 
    v-for="career in career_list.career"
    :name="career.name"
    />
</template>
