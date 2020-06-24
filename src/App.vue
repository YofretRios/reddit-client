<template>
  <div id="app" class="h-screen lg:flex">
    <PostLits />
    <PostDetails />
  </div>
</template>

<script>
import PostDetails from './components/PostDetails.vue';
import PostLits from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    PostDetails,
    PostLits
  },
};
</script>
