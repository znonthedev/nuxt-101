<template>
  <DropDown @selectedItem="setLocale" :list-items="dropDownItems">
    <img :src="'/lang/'+currentLocale+'.png'" alt="Language">
  </DropDown>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      dropDownItems: [
        {viewValue: 'English', value: 'en'},
        {viewValue: 'Arabic', value: 'ar'}
      ]
    }
  },
  methods: {
    setLocale(item) {
      this.$i18n.setLocale(item.value);
      this.$i18n.setLocaleCookie(item.value)
      this.toggleDirection();
    },
    toggleDirection() {
      let locale = this.$i18n.getLocaleCookie() || 'en'
      if (locale === 'ar') {
        document.querySelector('body').classList.add('rtl');
      } else {
        document.querySelector('body').classList.remove('rtl');
      }
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.availableLocales
    },
    currentLocale() {
      return this.$i18n.locale
    }
  },
  created() {
    this.toggleDirection();
  }

}
</script>

<style scoped>

</style>
