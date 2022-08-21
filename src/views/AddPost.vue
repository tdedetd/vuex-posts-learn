<template>
  <div>
    <h2>Add post</h2>
    <form @submit.prevent="onFormSubmit">
      <div class="add-post__form-item">
        <input type="text" placeholder="Title" v-model="title" />
      </div>
      <div class="add-post__form-item">
        <input type="text" placeholder="Body" v-model="body" />
      </div>
      <div class="add-post__form-item">
        <button type="submit">Add post</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .add-post__form-item {
    margin: .5rem 0;
  }
</style>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations(['addPost']),
    clearForm() {
      this.title = '';
      this.body = '';
    },
    onFormSubmit(event) {
      if (!this.title. trim()) return;

      this.addPost({
        id: new Date().getTime(),
        title: this.title,
        body: this.body
      });
      this.clearForm();
    }
  }
};
</script>
