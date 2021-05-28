<template>
    <div>
        <h1>Liste des articles avec pagination</h1>
        <template v-if="loaded">
            <div class="row">
                <div class="col-md-4" v-for="post in posts" :key="post.id">
                    <PostCard class="mb-2" :post="post" />
                </div>
            </div>
            <p class="text-center font-weight-bold">Page {{ page }}/{{ totalPages }}</p>
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <button type="button" @click="changePage(false)" :disabled="this.page === 1" class="page-link">Page précédente</button>
                    </li>
                    <li class="page-item">
                        <button type="button" @click="changePage(true)" :disabled="this.totalPages === this.page" class="page-link">
                            Page suivante
                        </button>
                    </li>
                </ul>
            </nav>
        </template>
    </div>
</template>

<script>
import { HTTP } from '@/http-common.js'
import PostCard from './Card'

export default {
    components: {
        PostCard,
    },
    data() {
        return {
            posts: [],
            totalPages: 0,
            elementsPerPage: 6,
            page: 1,
            loaded: false,
        }
    },
    mounted() {
        this.getPosts()
    },
    methods: {
        async getTotalPages() {
            const { data } = await HTTP.get('/posts')
            this.totalPages = data.length < this.elementsPerPage ? 1 : Math.ceil(data.length / this.elementsPerPage)
        },
        async getPosts() {
          this.loaded = false
            // récupérer le nombre de pages
            await this.getTotalPages()
            // calculer skip & limit
            const skip = this.elementsPerPage * (this.page - 1)
            const { data } = await HTTP.get('/posts', {
                params: {
                    skip: skip,
                    limit: this.elementsPerPage,
                },
            })
            this.posts = data
            this.loaded = true
        },
        changePage(isNext) {
            this.page = isNext ? this.page + 1 : this.page - 1
            this.getPosts()
        },
    },
}
</script>
