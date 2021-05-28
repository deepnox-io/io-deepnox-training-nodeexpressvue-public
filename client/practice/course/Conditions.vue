<template>
    <div>
        <h1>Conditions</h1>
        <h2>Exemple 1</h2>
        <p>{{ message }}</p>
        <p :title="message">Je suis un texte, passez votre souris dessus</p>

        <br>
        <h2>Exemple 2</h2>
        <input class="form-control" :disabled="isDisabled" :value="isDisabled ? 'Je suis désactivé' :  'Je suis activé'">
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'Hello Vue !',
            isDisabled: false
        }
    },
}
</script>
