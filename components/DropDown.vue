<template>
  <div class="relative outline-none">
    <button @click="isOpen = !isOpen" class="relative block h-8 w-8 rounded-full overflow-hidden outline-none"
            :class="[isOpen? 'z-10': 'z-0']">
      <slot></slot>
    </button>
    <button v-if="isOpen" @click="isOpen = false"
            tabindex="-1"
            class="fixed inset-0
                   w-full h-full
                    bg-black opacity-50 cursor-default">
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl">
      <ul>
        <li v-for="item in listItems" @click.prevent="onclick(item)"
            class="block px-4 py-2 text-gray-800 hover:bg-blue-700 hover:text-white">
          {{ item.viewValue }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ['listItems'],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    onclick(item) {
      this.isOpen = false;
      this.$emit('selectedItem', item)
    }
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape);

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  }
}
</script>

<style scoped>

</style>
