export default {
  actions: {
    async fetchPosts(ctx, limit = 10) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
      const posts = await res.json();

      ctx.commit('updatePosts', posts);
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts: (state) => state.posts,
    postsCount: (state) => state.posts.length
  }
};
