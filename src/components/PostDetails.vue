<template>
  <div class="w-full lg:w-3/4 xl:w-4/5 overflow-y-auto">
    <div v-if="selectedPost" class="mt-20 p-4 lg:p-6 w-full">
      <h1 class="text-2xl">{{ selectedPost.title }}</h1>
      <p class="text-xs text-gray-500 pb-1">
        Posted by {{ selectedPost.author }} <span>{{ selectedPost.created | timeAgo }}</span>
      </p>

      <img class="m-auto lg:w-3/6 py-10" :src="selectedPost.url_overridden_by_dest" alt="attachment">

      <div class="text-center">
        <button class="btn btn-primary" :disabled="isLoading" @click="savePicture">
          Save Image
        </button>
      </div>
    </div>

    <div v-else class="mt-20 p-4 lg:p-6 w-full">
      <p class="text-center py-4 ont-bold text-gray-500">Select a post to see the details</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PostDetails',
  computed: mapState({
    selectedPost: state => state.post.selectedPost,
    isLoading: state => state.ui.isLoading
  }),
  methods: {
    ...mapActions({
      saveImage: 'ui/saveImage'
    }),
    savePicture() {
      this.saveImage(this.selectedPost.url_overridden_by_dest);
    },
  },
};
</script>
