<template>
  <div class="container">
    <header>
      <h1>Posts app</h1>

      <nav>
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/add-post">Add post</router-link>
      </nav>
    </header>
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts(10);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: 0 auto;
  padding-top: 1rem;
  max-width: 50rem;
}

h1 {
  margin: 1rem;
}

.nav-item {
  margin: 0 .5rem;
}
</style>
