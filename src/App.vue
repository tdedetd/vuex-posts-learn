<template>
  <div class="container">
    <h1>Posts app</h1>
    <hr>
    <h2>Search posts</h2>
    <p>Posts found: {{ postsCount }}</p>
    <PostList v-bind:posts="allPosts"></PostList>
  </div>
</template>

<script>
import PostList from './components/PostsList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts(10);
  },
  components: {
    PostList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  margin: 1rem;
}

.container {
  margin: 0 auto;
  padding-top: 1rem;
  max-width: 50rem;
}
</style>
