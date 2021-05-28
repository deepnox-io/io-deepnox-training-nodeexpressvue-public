<template>
<div>
  <h1>Accueil</h1>
  <div class="row">
    <div class="col-md-4" v-for="post in posts" :key="post.id">
        <PostCard class="mb-2" :post="post" />
    </div>
  </div>
</div>

</template>

<script>
import { HTTP } from '@/http-common.js'
import PostCard from './post/Card'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const { data } = await HTTP.get('/posts')
      this.posts = data
    }
  }
}
</script>
