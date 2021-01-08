<template>
  <div class="flex flex-col">
    <h1 class="text-4xl text-black mt-4">{{ $t('today-activity') }}</h1>
    <div class="flex gap-4 mt-4 place-content-between">
      <div v-for="activity in activities"
           class="min-w-100 min-h-50 max-w-100 max-h-50 flex gap-2 items-center p-4 rounded-lg shadow-lg"
           :class="activity.color">
        <span class="block text-4xl text-black text-gray-100">{{ activity.count }}</span>
        <span class="block text-sm text-gray-100">{{ $t(activity.name) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {name: 'new-followers', count: 25, color: 'bg-red-400'},
        {name: 'new-replies', count: 156, color: 'bg-blue-400'},
        {name: 'likes-received', count: 241, color: 'bg-green-400'},
      ]

    }
  }
};
</script>

<style>
</style>

