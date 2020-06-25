<template>
  <div class="py-2 flex">
    <div class="relative">
      <div class="overflow-hidden rounded thumbnail">
        <img class="w-auto" :src="data.thumbnail" alt="thumbnail">
      </div>
    </div>
    <div class="ml-2 flex-1">
      <h3 class="text-sm font-bold">{{ data.title }}</h3>

      <p class="text-xs text-gray-500 pb-1">
        Posted by {{ data.author }} <span>{{ data.created }}</span>
      </p>

      <footer class="relative flex items-center">
        <p class="text-xs text-gray-500">{{ data.num_comments }} comments</p>
        <button type="button" class="btn btn-secondary sm ml-auto">Dismiss</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
