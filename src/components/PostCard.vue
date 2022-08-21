<template>
  <div class="card">
    <div class="card__header">
      <h3>{{ post.title }}</h3>
    </div>
    <div class="card__img">
      <img
        crossorigin="anonymous"
        alt="Post img"
      />
    </div>
  </div>
</template>

<style scoped>
  .card {
    background: #fff;
    box-shadow: 0 0 2px #aaa;
    transition: background .5s linear;
  }

  .card:hover {
    background: #f2f2f2;
    box-shadow: 0 0 3px #aaa;
  }

  .card__header {
    padding: .5rem;
    height: 10rem;
  }

  .card__header > h3 {
    margin: 0;
  }

  .card__img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #ccc;
  }

  .card__img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
