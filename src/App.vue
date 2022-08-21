<template>
  <div class="container">
    <h1>Posts app</h1>
    <PostList v-bind:posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from './components/PostsList.vue';

export default {
  name: 'App',
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    this.posts = await res.json(); 
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
