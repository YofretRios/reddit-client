<template>
  <div class="h-screen">
    <header class="flex fixed z-30 w-full p-4 lg:px-6 lg:py-4 flex border border-gray-200 bg-white">
      <router-link to="/">
        <img src="./assets/back.svg" class="max-w-none w-auto">
      </router-link>

      <router-link class="ml-auto" to="/gallery">
        <img src="./assets/gallery.svg" class="max-w-none">
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {

    };
  },
};
</script>
