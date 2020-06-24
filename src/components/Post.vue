<template>
  <div class="py-2 flex">
    <div>
      <div class="overflow-hidden rounded thumbnail">
        <img class="w-auto" src="http://via.placeholder.com/300" alt="thumbnail">
      </div>
    </div>
    <div class="ml-2 flex-1">
      <h3 class="text-sm font-bold">Post title</h3>

      <p class="text-xs text-gray-500 pb-1">
        Posted by <span>15 hours ago</span>
      </p>

      <footer class="relative flex items-center">
        <p class="text-xs text-gray-500">36 comments</p>
        <button type="button" class="btn btn-secondary sm ml-auto">Dismiss</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {

    };
  },
};
</script>
