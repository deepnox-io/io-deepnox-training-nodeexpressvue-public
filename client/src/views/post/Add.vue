<template>
    <div>
        <h1>Ajouter un article</h1>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="nickname" class="form-label">Pseudo</label>
                <input required type="text" v-model="nickname" class="form-control" id="nickname" />
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Texte</label>
                <textarea required v-model="text" class="form-control" id="text" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Créer l'article</button>
        </form>
    </div>
</template>

<script>
import { HTTP } from '@/http-common.js'

export default {
    data() {
        return {
            nickname: '',
            text: '',
        }
    },
    methods: {
        async submit() {
            try {
                await this.createPost()
                this.$router.push({ name: 'home' })
            } catch (error) {
                console.log(error)
            }
        },
        async createPost() {
            return await HTTP.post('/posts', {
                nickname: this.nickname,
                text: this.text,
            })
        },
    },
}
</script>

