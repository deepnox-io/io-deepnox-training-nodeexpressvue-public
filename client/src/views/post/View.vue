<template>
    <div>
        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">Posté par {{ post.nickname }}</h1>
                <p class="lead my-3" v-if="post.text" v-html="`${post.text.substring(0, 10)}...`">
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 blog-main">
                <div class="blog-post" v-html="post.text">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from '@/http-common.js'

export default {
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      const { data } = await HTTP.get(`/posts/${this.$route.params.id}`)
      this.post = data
    }
  }
}
</script>