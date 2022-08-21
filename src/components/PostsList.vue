<template>
  <ul>
    <li v-for="post of posts" :key="post.id">
      <PostCard v-bind:post="post"></PostCard>
    </li>
  </ul>
</template>

<script>
import PostCard from './PostCard.vue';

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    PostCard
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 581px) and (max-width: 819px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 401px) and (max-width: 580px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 400px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  li {
    width: 150px;
    padding: 1.5rem;
    margin: 0 auto;
  }
</style>
