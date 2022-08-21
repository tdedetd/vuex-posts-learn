export default {
  actions: {
    async fetchPosts({ commit }, limit = 10) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
      const posts = await res.json();

      commit('updatePosts', posts);
    }
  },
  mutations: {
    addPost(state, post) {
      state.posts.unshift(post);
    },
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
