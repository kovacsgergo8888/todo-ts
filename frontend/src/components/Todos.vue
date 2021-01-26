<template>
    <h1>Todos</h1>
    <div>
        {{todos}}
    </div>
    <div>
        <button >new todo</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {client} from '../graphql-request/client'
import {gql} from 'graphql-request'
export default defineComponent({
    setup () {
        const todos = ref([])
        const getTodos = async () => {
            const data = await client.request(
               gql`{todos {todo location dueDate}}`
            )
            todos.value = data.todos
        }

        getTodos()

        return {
            todos
        }
    }
})
</script>