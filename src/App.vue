<template>
  <div class="h-screen">
    <header class="flex justify-between fixed z-30 w-full p-4 lg:px-6 lg:py-4 flex border border-gray-200 bg-white">
      <button type="button" class="lg:hidden lg:px-3" @click="toggleNavBar">
        <img src="./assets/hamburger.svg" class="icon-height max-w-none w-auto">
      </button>

      <router-link class="ml-auto" to="/gallery">
        <img src="./assets/gallery.svg" class="icon-height max-w-none">
      </router-link>
    </header>
    <div id="app" class="h-screen lg:flex">
      <PostLits />
      <PostDetails />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      toggleNavBar: 'ui/toggleNavBar'
    })
  }
};
</script>
