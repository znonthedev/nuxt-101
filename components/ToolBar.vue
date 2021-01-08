<template>
  <div class="flex place-content-between items-center">
    <div class="icons flex gap-5">
      <button v-for="icon in icons"
              class="parent bg-gray-200 w-8 h-8 rounded-lg
               flex place-items-center place-content-center
                focus:outline-none
                transition duration-500 ease-in-out
                transform hover:-translate-y-1 hover:scale-105
                hover:shadow-lg
                ">
        <fa class="text-gray-400 parent-hover:text-gray" :icon="['fas', icon]"/>
      </button>
    </div>
    <div class="user-info flex items-center gap-3">
      <span class="font-bold">{{ name }}</span>
      <DropDown :list-items="dropDownItems">
        <img src="/user-profile.png" alt="Profile picture">
      </DropDown>
      <LanguageSwitcher/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      icons: ['envelope', 'cog', 'bell'],
      name: 'Harry Ferguson',
      dropDownItems: [
        {viewValue: 'Profile', value: null},
        {viewValue: 'Configure', value: null},
        {viewValue: 'Sign Out', value: null},
      ]

    }
  }
}
</script>

<style scoped>
.parent:hover .parent-hover\:text-gray {
  @apply text-gray-600
}
</style>
