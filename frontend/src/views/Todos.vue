<template>
    <h1 class="pb-6 text-center text-6xl tracking-wider antialiased">Todos</h1>
    <div class="mb-6 text-right">
        <btn @click="newTodo">+</btn>
    </div>
    <div 
        class="text-center text-3xl"
        v-if="!todos.length"
    >
        No todos!
    </div>
    <div v-else>
        <TodoListItem
            v-for="todo in todos" :key="todo.id"
            :todo="todo"
            @delete-todo="deleteTodo"
        />
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
        const deleteTodo = async (todo) => {
            todos.value = todos.value.filter(t => t.id !== todo.id)
            client.request(gql`
                mutation deleteTodo($todoId: ID!) {
                    deleteTodo(id: $todoId)
                }
            `, {
                todoId: todo.id
            })
        }

        getTodos()

        return {
            todos,
            newTodo,
            deleteTodo
        }
    }
})
</script>