<template>
  <div :class="navbar ? 'fixed lg:relative' : 'hidden'" class="overflow-y-auto z-20 bg-white h-full w-full lg:block lg:w-1/4">
    <nav class="mt-20 px-4 pt-2 lg:pt-4 divide-y divide-gray-300">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Post from './Post';

export default {
  name: 'PostList',
  components: {
    Post
  },
  data() {
    return {};
  },
  computed: mapState({
    navbar: state => state.ui.navbar
  })
};
</script>

<style lang="css" scoped>
</style>
