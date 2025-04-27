<script lang="ts" setup>
  const projects = await queryCollection('projects').first() as any;
</script>
<template>
  <div id="projects" class="flex items-center justify-center w-screen pt-7 pb-6">
    <a href="#projects">
      <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
    </a>
    <h2 class="font-black text-black text-2xl lg:text-6xl pb-6 border-b"> {{ $t('projects.title') }} </h2>
  </div>
  <div class="flex items-center justify-center w-screen pb-10">

  <div class="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 max-w-6xl">
    <ProjectCard 
        v-for="project in projects.project"
        :name="project.name"
      />
  </div>
</div>
</template>