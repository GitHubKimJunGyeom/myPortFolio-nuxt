<script setup lang="ts">
  const { locale: current, setLocaleCookie, locales } = useI18n();

  const currentLocale = computed(() => {
    return locales.value.find(locale => locale.code === current.value);
  });

  watch(current, (newLocale) => {
    setLocaleCookie(newLocale);
  });

  const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="flex items-center gap-3 rounded-lg border border-black/90 px-3 py-1 backdrop-blur-xl text-gray-400">
      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        class="cursor-pointer select-none"
        :to="switchLocalePath(locale.code)"
      >
        <span
          class="font-semibold"
          :class="locale.code === currentLocale?.code ? 'text-amber-600' : 'text-neutral-500'"
        >
          {{ locale.displayCode }}
        </span>
      </NuxtLink>
  </div>
</template>
