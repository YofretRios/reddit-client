<template>
  <div :class="navbar ? 'fixed lg:relative' : 'hidden'" class="overflow-y-auto z-20 bg-white h-full w-full lg:block lg:w-5/12">
    <nav class="mt-20 px-4 pt-2 lg:pt-4 divide-y divide-gray-300">
      <Post v-for="post in posts" :key="post.id" :data="post.data" />
      <p v-if="posts.length === 0" class="text-center font-bold text-gray-500">No top post to show</p>
    </nav>

    <div v-if="posts.length !== 0" class="my-2 text-center">
      <button class="btn btn-trasnparent" :disabled="fetchingMore" @click="loadMore">Load More</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    navbar: state => state.ui.navbar,
    posts: state => state.post.posts,
    fetchingMore: state => state.post.fetchingMore
  }),
  mounted() {
    // Fetch Initial top post
    this.fetchPost({ subreddit: 'pics' });
  },
  methods: {
    ...mapActions({
      fetchPost: 'post/fetchPost',
      fetchMore: 'post/fetchMore'
    }),
    loadMore() {
      this.fetchMore({ subreddit: 'pics' });
    }
  }
};
</script>

<style lang="css" scoped>
</style>
