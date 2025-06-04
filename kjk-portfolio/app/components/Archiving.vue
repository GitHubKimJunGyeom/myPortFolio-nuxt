<template>
  <div id="archiving" class="flex items-center justify-center w-screen pt-7 pb-6 bg-gray-800">
    <a href="#archiving">
      <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
    </a>
    <h2 class="font-black text-white text-2xl lg:text-6xl pb-6 border-b">{{ $t('archiving.title') }}</h2>
  </div>
  <div class="flex items-center justify-center w-screen md:w-auto pb-10 bg-gray-800">
    <div class="rounded-[12px] bg-white/80 p-4 w-screen md:w-auto shadow-md border flex gap-2 justify-center items-center">
      <div class="mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-1">
        <a 
          class="w-full p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500 flex flex-col items-center"
          href="https://github.com/GitHubKimJunGyeom"
        >
          <img src="/static/assets/img/svg/github-logo-vector.svg" class="shadow rounded-lg overflow-hidden border h-96" >
          <div class="mt-8">
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{{ $t('archiving.github_content') }}</button>
            </div>
          </div>
        </a>
        <a 
          class="w-full p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500 flex flex-col items-center"
          href="https://www.youtube.com/@cento7517"
        >
          <img src="/static/assets/img/png/CodeAndChords.png" class="shadow rounded-lg overflow-hidden borde h-96" >
          <div class="mt-8">
            <div class="mt-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{{ $t('archiving.youtube_content') }}</button>
            </div>
          </div>
        </a>
        <a 
          class="w-full p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500 flex flex-col items-center"
          href="https://www.instagram.com/tokyo_kim90?igsh=YmtseWY4czYyaGZt&utm_source=qr"
        >
          <img src="/static/assets/img/jpg/Instagram.jpg" class="shadow rounded-lg overflow-hidden borde h-96" >
          <div class="mt-8">
            <div class="mt-5">
              <button type="button" class="inline-flex rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{{ $t('archiving.instagram_content') }}</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>