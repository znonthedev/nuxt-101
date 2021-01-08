<template>
  <nav class="flex px-4 pt-4 text-white place-content-between items-center">
    <div class="flex gap-2 items-center">
      <img class="h-12 w-12 rounded-full ring-blue-700 ring-1" src="/pearl-logo.jpg" alt="Pearl Company Logo">
      <span class="font-black ">Pearls</span>
    </div>
    <ul class="flex gap-2">
      <li class="nuxt-link-active" v-for="(value, key) in links" :key="key" :value="value">
        <nuxt-link :to="localePath(value)">{{ $t(key) }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: {
        overview: '/',
        media: '/media',
        profile: '/profile'
      },
    }
  }
}
</script>

<style scoped>

</style>
