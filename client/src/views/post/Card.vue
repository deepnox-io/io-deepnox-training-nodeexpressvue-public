<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" v-if="post.text" v-html="`${post.text.substring(0, 10)}...`"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Posté par {{ post.nickname }}</h6>
            <p class="card-text" v-html="`${post.text.substring(0, 100)}...`"></p>
            <router-link :to="{ name: 'post.view', params: { id: post._id } }" class="btn btn-primary"
                >Voir l'article</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style>
</style>