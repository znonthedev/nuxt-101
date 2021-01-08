<template>
  <div class="min-h-screen grid grid-cols-12 bg-gray-100">
    <div class="flex flex-col bg-blue-600  flex-1 rounded-r-3xl col-span-5 ">
      <AppHeader/>
      <div class=" flex-1 flex flex-col justify-center items-center px-5">
        <h1 class="text-gray-50 text-4xl">{{ $t('welcome') }}</h1>
        <p class="text-gray-50 pt-4">{{ $t('lorem') }}</p>
      </div>
    </div>
    <div class="col-start-6 mt-4 mx-4 col-span-7">
      <ToolBar/>
      <Nuxt/>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a.nuxt-link-exact-active {
  @apply text-yellow-300 font-bold
}

</style>
