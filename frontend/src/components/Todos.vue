<template>
    <h1>Todos</h1>
    <div>
        {{todos}}
    </div>
    <div>
        <TodoListItem
            v-for="todo in todos" :key="todo.id"
            :todo="todo"
        />
    </div>
    <div>
        <button @click="newTodo">new todo</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {client} from '../graphql-request/client'
import {gql} from 'graphql-request'
import {useRouter} from 'vue-router'
import TodoListItem from './TodoList/TodoListItem.vue'
export default defineComponent({
    components: {
        TodoListItem
    },
    setup () {
        const router = useRouter()
        const todos = ref([])
        const getTodos = async () => {
            const data = await client.request(
               gql`{todos {id todo location dueDate}}`
            )
            todos.value = data.todos
        }
        const newTodo = () => {
            router.push({name: 'newTodo'})
        }

        getTodos()

        return {
            todos,
            newTodo
        }
    }
})
</script>