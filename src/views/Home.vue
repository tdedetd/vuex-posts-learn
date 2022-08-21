<template>
  <div>
    <h2>Home</h2>
    <p>Posts found: {{ postsCount }}</p>
    <PostList v-bind:posts="allPosts"></PostList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostList from '../components/PostsList.vue';

export default {
  computed: mapGetters(['allPosts', 'postsCount']),
  components: {
    PostList
  }
}
</script>
