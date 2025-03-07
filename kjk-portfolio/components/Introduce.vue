<template>
    <section id="introduce" class="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        <div class="relative z-10 text-center py-24 md:py-48">
            <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12"> - {{ $t('introduce_h1') }} - </h1>
            <h2 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">{{ $t('introduce_content_1') }}</h2>
            <h3 class="text-gray-500 text-center text-1xl md:text-xl lg:text-3xl xl:text-3xl font-display font-bold mb-12 whitespace-pre-line">{{ $t('introduce_content_2') }}</h3>
        </div>

        <img src="@/static/assets/img/jpg/background.jpg" class="w-full h-full absolute inset-0 object-cover opacity-70" />
    </section>
</template>
