<!-- Please remove this file from your project -->
<template>
  <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
    <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
      Welcome to your Nuxt Application
    </h1>
    <p class="pt-6">
      Nuxtアプリケーションです。
      <i class='bx bxl-vuejs bx-sm'></i>
    </p>
    <p class="pt-6">
      <nuxt-link to="/about">about page</nuxt-link>
    </p>
    <div class="flex justify-center py-6 space-x-2">
      <a href="https://github.com/ttsukasan/nuxt-pages-sample"
         class="text-gray-600 hover:text-gray-800">
        <i class='bx bxl-github bx-sm'></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
