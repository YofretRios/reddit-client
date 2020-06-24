<template>
  <div class="hidden lg:block w-1/4">
    <nav class="px-4 pt-6 divide-y divide-gray-300">
      <Post />
      <Post />
    </nav>
  </div>
</template>

<script>
import Post from './Post';

export default {
  name: 'PostList',
  components: {
    Post
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
</style>
