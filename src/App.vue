<template>
  <div class="h-screen">
    <header class="fixed z-30 w-full p-4 lg:px-6 lg:py-4 flex border border-gray-200 bg-white">
      <button type="button" class="lg:hidden lg:px-3" @click="toggleNavBar">
        <img src="./assets/hamburger.svg" class="max-w-none w-auto">
      </button>

      <input
        type="text"
        name="subreddit"
        class="ml-2 lg:ml-0 focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-500 rounded-lg bg-gray-200 py-2 px-4 block w-full lg:w-2/4 appearance-none leading-normal"
        placeholder="Search Subreddit"
      >

      <button class="btn btn-primary ml-2">
        Search
      </button>
    </header>
    <div id="app" class="h-screen lg:flex">
      <PostLits />
      <PostDetails />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostDetails from './components/PostDetails.vue';
import PostLits from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    PostDetails,
    PostLits
  },
  methods: {
    ...mapActions({
      toggleNavBar: "ui/toggleNavBar"
    })
  }
};
</script>
