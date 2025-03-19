<script lang="ts" setup>
  const projects = await queryCollection('projects').first()
</script>
<template>
  <div id="about_me" class="flex items-center justify-center w-screen pt-7 pb-6">
    <a href="#about_me">
      <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
    </a>
    <h2 class="font-black text-2xl lg:text-4xl pb-6 border-b"> {{ $t('projects.title') }} </h2>
  </div>
  <div class="flex items-center justify-center w-screen pb-10">
    ??
      <ProjectCard />
  </div>
</template>