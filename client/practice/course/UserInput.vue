<template>
  <div>
        <h1>Gestion des entrées utilisateur / évènements</h1>
        <h2>Exemple 1</h2>
        <p>{{ message }}</p>
        <button class="btn btn-primary" v-on:click="reverseMessage">Inverser le message</button>
        <div v-if="displayExemple2">
            <hr>
            <h2>Exemple 2</h2>
            <p>{{ message }}</p>
            <input class="form-control" v-model="message">
        </div>
  </div>
</template>

<script>
export default {
     data() {
        return {
            displayExemple2: false,
            message: 'Bonjour Vue.js !'
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>