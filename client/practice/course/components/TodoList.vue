<template>
    <ol>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ol>
</template>

<script>
import Todo from "./Todo"

export default {
    components: {
        Todo,
    },
    data() {
        return {
            todos: [
                { id: 1, text: 'Learn JavaScript' },
                { id: 2, text: 'Learn Vue' },
                { id: 3, text: 'Build something awesome' },
            ],
        }
    },
}
</script>