<template>
  <div class="h-screen">
    <header class="flex fixed z-30 w-full p-4 lg:px-6 lg:py-4 flex border border-gray-200 bg-white">
      <router-link to="/">
        <img src="./assets/back.svg" class="icon-height max-w-none w-auto">
      </router-link>

      <router-link class="ml-auto" to="/gallery">
        <img src="./assets/gallery.svg" class="icon-height max-w-none">
      </router-link>
    </header>

    <div v-if="images.length === 0" class="h-screen pt-32 text-center">
      <p class="font-bold text-gray-500">There are no images saved into the gallery</p>
      <p class="font-bold text-gray-500">Explore the tops post and save some!</p>
    </div>
    <div v-else class="h-screen pt-20">
      <v-gallery
        :images="images.map((image) => image.reddit_url)"
        :index="index"
        @close="index = null"
      />

      <section class="container m-auto flex flex-wrap justify-center">
        <div
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          :style="{ backgroundImage: `url(${image.reddit_url})`, width: '300px', height: '200px' }"
          class="image"
          @click="index = imageIndex"
        >
          <button class="btn btn-white sm shadow border border-black m-2" @click="removeImg($event, image._id)">
            Remove
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Gallery',
  data() {
    return {
      index: null
    };
  },
  computed: mapState({
    images: state => state.ui.gallery
  }),
  mounted() {
    this.getImages();
  },
  methods: {
    ...mapActions({
      getImages: 'ui/getImages',
      deleteImage: 'ui/deleteImage'
    }),
    removeImg(event, id) {
      event.stopPropagation();

      this.deleteImage(id);
    }
  },
};
</script>
