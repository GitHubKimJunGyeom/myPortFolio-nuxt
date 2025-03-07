<template>
  <div id="about_me" class="flex items-center justify-center w-screen pt-7">
    <h2 class="font-bold text-2xl lg:text-4xl pb-6 border-b"> {{ $t('about_me') }} </h2>
  </div>
  <div class="flex items-center justify-center w-screen pb-10">
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 max-w-6xl">
      <div class="block text-center">
          <img src="@/static/assets/img/svg/user.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('about_me_title_name') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_name') }}
          </p>
      </div>

      <div class="block text-center">
          <img src="@/static/assets/img/svg/calendar.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('about_me_title_birthday') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_birthday') }}
          </p>
      </div>

      <div class="block text-center">
          <img src="@/static/assets/img/svg/map-marker.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('about_me_title_place') }}
          </p>
          <p class="pt-2 text-sm font-medium capitalize font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_place') }}
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="@/static/assets/img/svg/phone.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('about_me_title_phone_number') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_phone_number') }}
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="@/static/assets/img/svg/email.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-1 font-black text-black text-xl">
            {{ $t('about_me_title_email') }}
          </p>
          <p class="pt-2 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_email') }}@naver.com
          </p>
      </div>

      <div class="block py-5 text-center">
          <img src="@/static/assets/img/svg/pen.svg" class="block mx-auto w-[64px] h-[64px]">
          <p class="pt-2 font-black text-black text-xl">
            {{ $t('about_me_title_education') }}
          </p>
          <p class="whitespace-pre-line pt-3 text-sm font-medium font-body text-gray-800 lg:text-lg md:text-base">
            {{ $t('about_me_education') }}
          </p>
      </div>
  </div>
</div>

</template>

