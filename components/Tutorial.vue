<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <i class='bx bxl-vuejs bx-md'></i>
        NuxtJS
      </div>
      <div class="mt-3 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to your Nuxt Application
        </h2>
        <p class="mt-3 text-gray-600">
          Nuxtアプリケーションです。
        </p>
        <p class="mt-3">
          <nuxt-link to="/about">about page</nuxt-link>
        </p>
      </div>
      <div class="flex justify-center pt-4 space-x-2">
        <a href="https://github.com/ttsukasan/nuxt-pages-sample"
           class="text-gray-600 hover:text-gray-800">
          <i class='bx bxl-github bx-sm'></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
