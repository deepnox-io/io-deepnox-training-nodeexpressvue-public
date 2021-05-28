<template>
    <div>
        <h1>Boucles</h1>
        <ol>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todos: [
                { id: 1, text: 'Apprendre le Javascript' },
                { id: 2, text: 'Apprendre Vue' },
                { id: 3, text: 'Partir en vacances' }
            ]
        }
    },
}
</script>
