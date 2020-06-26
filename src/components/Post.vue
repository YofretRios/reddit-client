<template>
  <div class="py-2 flex cursor-pointer" @click="goToDetails">
    <div class="relative">
      <div class="overflow-hidden rounded thumbnail" :class="data.visited ? 'opacity-50' : 'opacity-100'">
        <img class="w-auto" :src="data.thumbnail" alt="thumbnail">
      </div>
    </div>
    <div class="ml-2 flex-1">
      <h3 class="text-sm font-bold" :class="data.visited ? 'opacity-50' : 'opacity-100'">{{ data.title }}</h3>

      <p class="text-xs text-gray-500 pb-1">
        Posted by {{ data.author }} <span>{{ data.created | timeAgo }}</span>
      </p>

      <footer class="relative flex items-center">
        <p class="text-xs text-gray-500">{{ data.num_comments }} comments</p>
        <button type="button" class="btn btn-secondary sm ml-auto" @click="dismissPost">Dismiss</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Post',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      setPost: 'post/setPost',
      dismiss: 'post/dismiss',
      toggleNavBar: 'ui/toggleNavBar'
    }),
    goToDetails() {
      this.toggleNavBar();
      this.setPost(this.data);
    },
    dismissPost(event) {
      event.stopPropagation();

      this.dismiss(this.data.id);
    }
  },
};
</script>
