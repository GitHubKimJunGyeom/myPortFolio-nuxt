<script setup lang="ts">
    import { onMounted } from 'vue';
    
        onMounted(() => {
            useSmoothScroll();
        });
        
</script>
<template>
    <div>
        <FolioMeta />
        <Introduce />
        <Aboutme />
        <Skill />
        <Archiving />
        <Projects />
        <Career />
        <!-- <Contact /> -->
    </div>
</template>