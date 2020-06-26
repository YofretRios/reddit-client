<template>
  <div :class="navbar ? 'fixed lg:relative' : 'hidden'" class="overflow-hidden z-20 bg-white h-full w-full lg:block lg:w-5/12">
    <div class="navbar-offset-top w-full border-b border-r border-gray-300 shadow">
      <button class="btn btn-trasnparent w-full" @click="dismissAll">Dismiss all</button>
    </div>
    <nav class="navbar-height px-4 divide-y divide-gray-300 overflow-y-auto border-r">
      <Post v-for="post in posts" :key="post.id" :data="post.data" />
      <p v-if="posts.length === 0" class="py-4 text-center font-bold text-gray-500">No top post to show</p>

      <div v-if="posts.length !== 0" class="my-2">
        <button class="btn btn-trasnparent w-full" :disabled="fetchingMore" @click="loadMore">Load More</button>
      </div>
    </nav>
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
      fetchMore: 'post/fetchMore',
      dismissAll: 'post/dismissAll'
    }),
    loadMore() {
      this.fetchMore({ subreddit: 'pics' });
    }
  }
};
</script>

<style lang="css" scoped>
</style>
