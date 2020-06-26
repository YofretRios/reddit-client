<template>
  <div class="w-full lg:w-3/4 xl:w-4/5 overflow-y-auto">
    <div v-if="selectedPost" class="mt-20 p-4 lg:p-6 w-full">
      <h1 class="text-2xl">{{ selectedPost.title }}</h1>
      <p class="text-xs text-gray-500 pb-1">
        Posted by {{ selectedPost.author }} <span>{{ selectedPost.created }}</span>
      </p>

      <p class="pb-4">
        {{ selectedPost.selftext }}
      </p>

      <!-- <img class="m-auto" :src="selectedPost.preview.images[0].source.url" alt="attachment"> -->
    </div>

    <div v-else class="mt-20 p-4 lg:p-6 w-full">
      <p class="text-center py-4 ont-bold text-gray-500">Select a post to see the details</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PostDetails',
  computed: mapState({
    selectedPost: state => state.post.selectedPost,
  })
};
</script>
