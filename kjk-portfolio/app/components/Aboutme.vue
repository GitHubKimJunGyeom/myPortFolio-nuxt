<template>
  <div id="about_me" class="flex items-center justify-center w-screen pt-7 pb-6">
    <a href="#about_me">
      <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
    </a>
    <h2 class="font-black text-2xl lg:text-6xl pb-6 border-b"> {{ $t('aboutme.title') }} </h2>
  </div>
  <div class="flex items-center justify-center w-screen pb-10">
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 max-w-6xl">
      <div class="block text-center">
          <img src="/static/assets/img/svg/user.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('aboutme.title_name') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.name') }}
          </p>
      </div>

      <div class="block text-center">
          <img src="/static/assets/img/svg/calendar.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('aboutme.title_birthday') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.birthday') }}
          </p>
      </div>

      <div class="block text-center">
          <img src="/static/assets/img/svg/map-marker.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('aboutme.title_place') }}
          </p>
          <p class="pt-2 text-sm font-medium capitalize font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.place') }}
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="/static/assets/img/svg/phone.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('aboutme.title_phone_number') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.phone_number') }}
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="/static/assets/img/svg/email.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('aboutme.title_email') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.email') }}@naver.com
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="/static/assets/img/svg/pen.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-2 font-black text-black text-xl">
            {{ $t('aboutme.title_education') }}
          </p>
          <p class="whitespace-pre-line pt-3 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('aboutme.education') }}
          </p>
      </div>
  </div>
</div>

</template>

