<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="skill.image" :alt="skill.name" class="w-16 h-16 mb-3" />
          <p class="text-gray-700 font-medium">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'HTML', image: '/icons/html.svg' },
  { name: 'CSS', image: '/icons/css.svg' },
  { name: 'JavaScript', image: '/icons/javascript.svg' },
  { name: 'Vue.js', image: '/icons/vue.svg' },
  { name: 'Nuxt.js', image: '/icons/nuxt.svg' },
  { name: 'Tailwind CSS', image: '/icons/tailwind.svg' },
  { name: 'React', image: '/icons/react.svg' },
  { name: 'Node.js', image: '/icons/node.svg' },
  { name: 'Laravel', image: '/icons/laravel.svg' },
  { name: 'Docker', image: '/icons/docker.svg' }
];
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
