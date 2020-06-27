<template>
  <div class="w-full lg:w-3/4 xl:w-4/5 overflow-y-auto">
    <div v-if="selectedPost" class="mt-20 p-4 lg:p-6 w-full">
      <h1 class="text-3xl">{{ selectedPost.title }}</h1>
      <p class="text-xs text-gray-500 pb-1">
        Posted by {{ selectedPost.author }} <span>{{ selectedPost.created | timeAgo }}</span>
      </p>

      <p class="text-xs text-gray-500 pb-1">{{ selectedPost.num_comments }} comments</p>
      <p class="text-xs text-gray-500 pb-1">
        <span class="font-bold text-green-400">Upvotes</span> {{ selectedPost.ups | kFormatter }}
        <span class="ml-3 font-bold text-red-400">Downvotes</span> {{ selectedPost.downs | kFormatter }}
        <span class="ml-3 font-normal">{{ selectedPost.upvote_ratio * 100 }}% Upvoted</span>
      </p>

      <img class="m-auto lg:w-3/6 py-8" :src="selectedPost.url_overridden_by_dest" alt="attachment">


      <div class="text-center">
        <button class="btn btn-primary" :disabled="isLoading" @click="savePicture">
          Save Image
        </button>
      </div>
    </div>

    <div v-else class="mt-20 p-4 lg:p-6 w-full">
      <p class="text-center py-4 font-bold text-gray-500">Select a post to see the details</p>
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
